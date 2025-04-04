    import React, { useEffect, useState } from "react";
    import "./Add.css";
    import upload_area from "../assets/image.png";

    function Add() {
    const [image, setImage] = useState(null);
    const [data,setData] = useState({
        name:"",description:"",category:""
    })
    const onChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData((prev)=>({...prev,[name]:value}));
    }
    const onSubmit = async(e)=>{
        e.preventDefault()

        const formData = new formData()
        formData.append("name",data.name)
        formData.append("describtion",data.description)
        formData.append("category",data.category)

        try {
            const response = 
            if(response.data.success){
                setData({
                    name:"",description:"",category:"...select..."
                })
                setImage(null)

            }
            else{
                
            }
        } catch (error) {
            console.log("error",error);
        }
        
    }
    useEffect(()=>{
        console.log("data",data);
    },[data])

    return (
        <div>
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
        <input type="text" placeholder="Enter the name" onChange={onChange} value={data.name} name="name"/>
        <textarea placeholder="Enter the description" onChange={onChange} value={data.description} name="description">Enter your d throught</textarea>
        <select onChange={onChange} value={data.category} name="category">
            <option value="">...Select one...</option>
            <option value="cricket">Cricket</option>
            <option value="football">Football</option>
            <option value="tennis">Tennis</option>
        </select>
        <button>Submit</button>
        </div>
    );
    }

    export default Add;
