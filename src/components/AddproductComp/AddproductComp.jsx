import React from "react";
import "./AddproductComp.css";

const AddproductComp = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.nama.value, e.target.email.value, e.target.website.value);
    e.target.nama.value = "";
    e.target.email.value = "";
    e.target.website.value = "";
  };

  return (
    <>
      <form className="sejajar ml-5" onSubmit={handleOnSubmit}>
        <div>
          <input
            type="text"
            class="form-control"
            id="nama"
            name="nama"
            aria-describedby="emailHelp"
            placeholder="Add name here..."
          />
        </div>
        <div>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Add email here..."
          />
        </div>
        <div>
          <input
            type="text"
            class="form-control"
            id="website"
            name="website"
            aria-describedby="emailHelp"
            placeholder="Add website here..."
          />
        </div>
        <button
          type="submit"
          class="btn btn-success ml-2"
          onSubmit={handleOnSubmit}
        >
          Add User
        </button>
      </form>
    </>
  );
};

export default AddproductComp;
