import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Update = () => {
  const giturl =
    "https://raw.githubusercontent.com/akarakash/react-user-web/refs/heads/main/src/image-2/";
  const { id } = useParams();
  console.log(id);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageData, setImageData] = useState("");
  const [brand, setBrand] = useState("all");
  const [apiData, setAPIData] = useState([]);
  const [description, setDescription] = useState("");
  console.log(apiData);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://670e4b65073307b4ee464347.mockapi.io/product-api")
      .then((getData) => {
        let data = getData.data;
        let filter = data.filter((items) => items.id == id);

        console.log(filter);
        console.log(data);

        if (filter.length > 0) {
          setName(filter[0].name);
          setPrice(filter[0].price);
          setImage(filter[0].image);
          setBrand(filter[0].brand);
          setDescription(filter[0].description);
        } else {
          console.log("Product with this id not found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`https://670e4b65073307b4ee464347.mockapi.io/product-api/${id}`, {
      name,
      price,
      image,
      brand,
      description,
    });
    setName("");
    setPrice("");
    setImage("");
    setImageData("");
    setBrand("all");
    setDescription("");
    navigate("/");
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

  const getData = () => {
    axios
      .get("https://670e4b65073307b4ee464347.mockapi.io/product-api")
      .then((getData) => {
        setAPIData(getData.data);
      });
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
        <h2 className="mt-3 mb-4">Update Products</h2>
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
          />
        </div>
        {image && (
          <img
            src={giturl + image}
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

        <button type="submit" className="btn btn-primary">
          Update Listing
        </button>
      </form>
    </div>
  );
};

export default Update;
