import React, { useState, useEffect } from "react";
import AdminMenu from "../AdminMenu";
import * as firebase from "firebase";
import DeleteIcon from "@material-ui/icons/Delete";
const db = firebase.firestore();
const firestore = firebase.firestore();

const Users = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("")
  const [team, setTeam] = useState("")
   //db

      async function addUser() {
    await firestore.collection(team).add({
      email: user,
      team: team,
  
    });
  }

 
  useEffect(() => {
    db.collection("profile")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let element = doc.data();
          console.log(element);

          setUsers((prevState) => {
            return [...prevState, { name: element.name, email: element.email }];
          });
        });
      });
  }, []);
  return (
    <div className="admin">
      {" "}
      <AdminMenu />
      <input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="email"
      ></input>
      <button onClick={addUser}>Dodaj użytkowika</button>
      <select onChange={(e) => setTeam(e.target.value)}>
        <option value="orkiestra symfoniczna">Orkiestra Symfoniczna</option>
        <option
          value="orkiestra Leopoldinum"
        >
          Orkiestra Leopoldinum
        </option>
        <option value="chór">
          Chór
        </option>
      </select>
      <div className="users">
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <span>
                <strong>{index + 1}.</strong> {user.name} - {user.email}
                <DeleteIcon style={{ marginLeft: "10px" }} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
