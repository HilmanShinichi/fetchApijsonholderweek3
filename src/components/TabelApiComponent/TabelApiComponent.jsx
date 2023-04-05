import React, { useEffect, useState } from "react";
import "./TabelApiComponent.css";



const TabelApiComponent = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
  fetch('https://fakestoreapi.com/products/20', {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then((js) => console.log(js));
  }, []);
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  fetch('https://fakestoreapi.com/products/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
  //   Post API inputan
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");
  // const [category, setCategory] = useState("");
  // const [responseData, setResponseData] = useState(null);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       title: title,
  //       price: parseFloat(price),
  //       description: description,
  //       image: image,
  //       category: category,
  //     }),
  //   };
  //   fetch("https://fakestoreapi.com/products", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  
   
  // const deleteBtn = document.querySelector('#delete-btn');

 
    
  return (
    <div>
      {/* <div className="justi mb-3 mt-3">
        <form onSubmit={handleSubmit}>
          <div class="form-group forminputapi">
            <label for="exampleInputEmail1">Title</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group forminputapi">
            <label for="exampleInputPassword1">Price</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div class="form-group forminputapi">
            <label for="exampleInputPassword1">Description</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div class="form-group forminputapi">
            <label for="exampleInputPassword1">Image</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div class="form-group forminputapi">
            <label for="exampleInputPassword1">Category</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div> */}

      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>category</th>
            <th>description</th>
            <th>price</th>
            <th>rating</th>
            <th>Action</th>
          </tr>

          {product.map((list, index) => (
            <tr key={index + 1}>
              <td>{list.id}</td>
              <td>{list.title}</td>
              <td>{list.category}</td>
              <td>{list.description}</td>
              <td>${list.price}</td>
              <td>
                Count {list.rating.count} | Rate {list.rating.rate}
              </td>
            </tr>
          ))}

          {/* <tr>
            <td>{responseData.id}</td>
            <td>{responseData.title}</td>
            <td>{responseData.category}</td>
            <td>{responseData.description}</td>
            <td>{responseData.price}</td>
            <td>{responseData.rating}</td>
            <td>
              <button type="button" class="btn btn-danger " onClick={handleDelete()}>
                Delete
              </button>
            </td>
          </tr> */}
        </thead>
      </table>
      {/* <button id="delete-btn">Hapus Produk</button> */}

    </div>
  );
};

export default TabelApiComponent;
