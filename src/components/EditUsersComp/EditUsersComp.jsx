import React, { useState } from "react";

const EditUsersComp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    website: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const userId = 1; // ID pengguna yang akan diubah

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(user),
      }
    );

    if (response.ok) {
      const updatedUser = await response.json();
      console.log(updatedUser);
    } else {
      console.log("Failed to update user.");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Website:
          <input
            type="text"
            name="website"
            value={user.website}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUsersComp;