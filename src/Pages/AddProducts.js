import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AddProducts = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageData, setImageData] = useState("");
  const [brand, setBrand] = useState("all");
  const [apiData, setAPIData] = useState([]);
  const [description, setDescription] = useState("");
  console.log(apiData);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://670e4b65073307b4ee464347.mockapi.io/product-api", {
    
      name,
      price,  
      image,
      brand,
      description,
    });
    localStorage.setItem("Name", name);
    localStorage.setItem("Price", price);
    localStorage.setItem("Image", image);
    localStorage.setItem("ImageData", imageData);
    localStorage.setItem("Brand", brand);
    localStorage.setItem("description", description)
    setName("");
    setPrice("");
    setImage("");
    setImageData("");
    setDescription("");
    setBrand("all");
    navigate("/")
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImage(file.name);
    }
  };


  return (
    <div className="container w-50 m-auto vh-100 d-flex flex-column justify-content-center">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="mt-3 mb-4">Add New Products</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        {imageData && (
          <img
            src={imageData}
            alt="Selected"
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
          />
        )}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="num"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discription" className="form-label">
            Discription
          </label>
          <textarea
          value={description}
            onChange={(e) => setDescription(e.target.value)}
            role="10"
            rows={6}
            className="form-control"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Brand
          </label>
          <select
            className="form-control"
            id="category"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          >
            <option value="all">ALL</option>
            <option value="iphone">I Phone</option>
            <option value="vivo">vivo</option>
            <option value="oneplus">oneplus</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary" >
          Add Listing
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
