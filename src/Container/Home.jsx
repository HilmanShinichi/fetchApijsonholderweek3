import React, { useEffect, useState } from "react";
import AddproductComp from "../components/AddproductComp/AddproductComp";
import ProductComp from "../components/ProductComp/ProductComp";
import EditUsersComp from "../components/EditUsersComp/EditUsersComp";

const Home = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(Users);

  const onAdd = async (nama, email, website) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: nama,
        email: email,
        website: website,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((Users) => [...Users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(Users.filter((User) => {
              return User.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

const onUpdate = async (id) => {
 fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    name: "hilman",
    email: "hilman@gmail.com",
    website: "naruto.com"
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((res) => {
    if (res.status !== 200) {
      return;
    } else {
      return res.json();
    }
  })
 .then(Users => {
    console.log('sukses')
 })
  .catch((err) => {
    console.log(err);
  });
};

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((Users,index) => (
            <ProductComp
            index={index}
              id={Users.id}
              nama={Users.name}
              email={Users.email}
              website={Users.website}
              onDelete={onDelete}
              onUpadate={onUpdate}
            />
          ))}
        </tbody>
       
      </table>
      <hr/>
      <AddproductComp onAdd={onAdd} />
      {/* <EditUsersComp onUpdate={onUpdate} /> */}
    </div>
  );
};

export default Home;
