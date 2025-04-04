import uploadModel from "../model/uploadModel.js";

const uploadHandler = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ msg: "No file uploaded" });
        }

        const { name, description, category } = req.body;

        // Validate required fields
        if (!name || !description || !category) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const uploadDetails = new uploadModel({
            name,
            description,
            image: req.file.filename,
            category
        });

        await uploadDetails.save();
        res.status(200).json({ msg: "Upload successful", uploadDetails });

    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ msg: "Upload failed", error: error.message });
    }
};

const getData = async(req,res)=>{
   try {
     const userDetails = await uploadModel.find({})
     res.json({msg:"fetch all the details",userDetails})
   } catch (error) {
    console.log("error in getData",error);
    res.json({msg:"error in getdata"})
   }
}

export { uploadHandler,getData };
