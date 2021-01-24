import React, { useState, useEffect } from "react";
import AdminMenu from "../AdminMenu"
import * as firebase from "firebase";
import DeleteIcon from "@material-ui/icons/Delete";
const db = firebase.firestore();

const Users = () =>  {


  const [users, setUsers] = useState([
    {
      name: [],
      email: [],
    },
   ]);

  useEffect(() => {
    db.collection("profile")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let element = doc.data();
          console.log(element)
          
          setUsers(prevState => {
            return [...prevState,
            {name: element.name, email: element.email },
          ]});
          
        });
      });
  }, []);
  return (
    <div className="admin">
      {" "}
      <AdminMenu />
      <div className="users">
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <span>
                <strong>{index + 1}.</strong> {user.name} - {user.email}
                <DeleteIcon style={{marginLeft:"10px"}}/>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
 
export default Users

