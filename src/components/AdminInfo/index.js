import React, { useState } from "react";
import AdminMenu from "../AdminMenu";
import * as firebase from "firebase";
import Notices from "../Notices"
// import DeleteIcon from "@material-ui/icons/Delete";

const firestore = firebase.firestore();

const AdminInfo = () => {
   const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setMsg(e.target.value);
  };
  const addMsg = () => {
     firestore.collection("info").add({
       text: msg,

     });
  
    setMsg("");

    //dodanie do kolekcji firestore - imię i nazwisko, wiadomość
  };
   
  return (
    <>
      <AdminMenu />

      <div className="adminInfo">
        <label>Dodaj informację dla użytkowników aplikacji:</label>
        <input type="text" value={msg} onChange={handleChange}></input>
        <button onClick={addMsg}>Dodaj</button>
        <Notices />
      </div>
    </>
  );
};

export default AdminInfo;



