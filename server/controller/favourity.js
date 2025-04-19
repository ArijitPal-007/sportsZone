import uploadModel from "../model/uploadModel.js";
import userModel from "../model/userModel.js";


const handleAddToFavourites = async (req, res) => {
  try {
      const userData = await userModel.findById(req.body.userId);
      let favourites = userData.favourites || {};


      if (!favourites[req.body.itemId]) {
          favourites[req.body.itemId] = true;
          await userModel.findByIdAndUpdate(req.body.userId, { favourites });
          return res.json({ success: "true", msg: "Added to favourites" });
      } else {
          return res.json({ success: "false", msg: "Already in favourites" });
      }
  } catch (error) {
      console.log("Favourite error :-", error);
      res.json({ success: "false", msg: "Error adding to favourites" });
  }
};

const getFavourites = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userId);
    const favIds = Object.keys(user.favourites || {});
    const favItems = await uploadModel.find({ _id: { $in: favIds } });

    res.json({ success: true, favourites: favItems });
  } catch (error) {
    console.log("Error fetching favourites:", error);
    res.status(500).json({ success: false, message: "Failed to get favourites" });
  }
};




export {handleAddToFavourites,getFavourites}
