import React, { useState, useEffect, useContext } from "react";
import * as firebase from "firebase";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import SpellInput from "../SpellInput";
import AppContext from "../../context";


const firestore = firebase.firestore();
const Notices = () => {
 
  const context = useContext(AppContext);
  const [msg, setMsg] = useState("");
  const [file, setFile] = useState("")
  const [info, setInfo] = useState([])


  const handleChange = (e) => {
    setMsg(e.target.value);
  };
  const addMsg = () => {
     firestore.collection("info").add({
       text: msg,
       file: file,
       name: context.currentUser.nameAndSurname,
     });
  
    setMsg("");

  };
   
  const addFile =  async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file);
    setFile(await fileRef.getDownloadURL())

  }

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await firestore.collection("info").get();
      setInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);


  return (
    <>
      <div className="adminInfo">
        {context.currentUser.admin ? (
          <>
            <label>Dodaj informację dla użytkowników aplikacji:</label>
            <input type="text" value={msg} onChange={handleChange}></input>{" "}
            <input type="file" onChange={addFile} />
            <button onClick={addMsg}>Dodaj</button>
          </>
        ) : null}
        <ul>
          {info.map((info) => {
            return (
              <li key={info.text}>
                <h4>Opublikował: {info.name}</h4>
                <div className="adminInfo__notices">
                  <p>{info.text} </p>
                  {info.file !== "" ?  <a href={info.file}>
                  
                    <CloudDownloadIcon style={{ color: "blue" }} />
                  </a> : null }
                 

                  {context.currentUser.admin ? (
                    <SpellInput info={info} />
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Notices
