import React, { useState } from "react";
import AdminMenu from "../AdminMenu";
// const db = firebase.firestore();

const AdminInfo = () => {
  const [msg, setMsg] = useState("");
  const [masseges, setMasseges] = useState([]);

  const handleChange = (e) => {
    setMsg(e.target.value);
  };
  const addMsg = () => {
    setMasseges((prevState) => {
      return [...prevState, msg];
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
        <ul>
          {masseges.map((msg, index) => {
            return <li key={index}>{msg}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default AdminInfo;
