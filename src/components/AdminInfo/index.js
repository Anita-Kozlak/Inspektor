import React, { useState, useEffect } from "react";
import AdminMenu from "../AdminMenu";
import * as firebase from "firebase";
// import Notices from "../Notices"
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import SpellInput from "../SpellInput"

const firestore = firebase.firestore();

const AdminInfo = () => {
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
      const db = firebase.firestore();
      const data = await db.collection("info").get();
      setInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);


  //2 metoda
    // useEffect(() => {
    //   firestore.collection("info")
    //     .get()
    //     .then((snapshot) => {
    //       snapshot.forEach((doc) => {
    //         let element = doc.data();
    //         console.log(element);

    //         setFiles((prevState) => {
    //           return [
    //             ...prevState,
    //             { text: element.text, file: element.file },
    //           ];
    //         });
    //       });
    //     });
    // }, []);
  return (
    <>
      <AdminMenu />

      <div className="adminInfo">
        <label>Dodaj informację dla użytkowników aplikacji:</label>
        <div></div>
        <input type="text" value={msg} onChange={handleChange}></input>{" "}
        <input type="file" onChange={addFile} />
        <button onClick={addMsg}>Dodaj</button>
        <ul>
          {info.map((info) => {
            return (
              <li key={info.text}>
                <div className="adminInfo__notices">
                  <p>{info.text} </p>
                  <a href={info.file}>
                    <CloudDownloadIcon style={{color: "blue"}} />
                  </a>
                  <SpellInput info={info} />                
                  </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AdminInfo;



