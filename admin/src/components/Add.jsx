import React, { useState } from "react";
import "./Add.css";
import axios from "axios";
import upload_area from "../assets/image.png";
import { useEffect } from "react";

function Add() {
  const url = "http://localhost:7000";
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: ""
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate form data
    if (!data.name || !data.description || !data.category) {
      setError("All fields are required");
      return;
    }

    if (!image) {
      setError("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      console.log("Submitting form data:", {
        name: data.name,
        description: data.description,
        category: data.category,
        image: image.name
      });
      
      const response = await axios.post(`${url}/api/details/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log("Server response:", response.data);
      
      if (response.data.msg === "upload successfully") {
        setData({ name: "", description: "", category: "" });
        setImage(null);
        setError("");
        alert("Item added successfully!");
      } else {
        setError(response.data.msg || "Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setError(error.response?.data?.msg || "Something went wrong. Try again.");
    }
  };

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <img
          src={image ? URL.createObjectURL(image) : upload_area}
          alt="Preview"
          className="add-image"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <input
        type="text"
        placeholder="Enter the name"
        onChange={onChange}
        value={data.name}
        name="name"
        autoComplete="off"
        required
      />

      <textarea
        placeholder="Enter the description"
        onChange={onChange}
        value={data.description}
        name="description"
        autoComplete="off"
        required
      />

      <select onChange={onChange} value={data.category} name="category" required>
        <option value="">...Select one...</option>
        <option value="cricket">Cricket</option>
        <option value="football">Football</option>
        <option value="tennis">Tennis</option>
      </select>

      <button type="submit">Submit</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default Add;
