import React, { useState, useContext } from "react";
import { firestore } from "../../firebase/firebaseConfig";
import MainViewLink from "../Link/MainViewLink";
import SignOutButton from "../SignOut";
import * as firebase from "firebase";
import January from "../Cast/January"
import February from "../Cast/February";
import March from "../Cast/March";
import April from "../Cast/April"
import May from "../Cast/May"
import June from "../Cast/June";
import July from "../Cast/July";
import August from "../Cast/August"
import September from "../Cast/September"
import October from "../Cast/October"
import November from "../Cast/November";
import December from "./December";
import AppContext from "../../context";






const Cast= () => {

  const context = useContext(AppContext);
  const [text, setText] = useState("");
  const [compositionFile, setCompositionFile] = useState("");
  const [castFile, setCastFile] = useState("");
  const [month, setMonth] = useState('')

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const addMonth= () => {
    firestore.collection(month).add({
      text: text,
      castFile: castFile,
      compositionFile:  compositionFile,
    });

    setText("");
  };

  const addCastFile = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file);
    setCastFile(await fileRef.getDownloadURL());
  };

  const addCompositionFile = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file);
    setCompositionFile(await fileRef.getDownloadURL());
  };



  return (
    <>
      <div className="buttons">
        <MainViewLink />
        <SignOutButton />
      </div>
      <div className="castPage">
        {context.currentUser.admin ? (
          <>
            <select onChange={(e) => setMonth(e.target.value)}>
              <option>wybierz miesiąc</option>
              <option>Styczeń</option>
              <option>Luty</option>
              <option>Marzec</option>
              <option>Kwiecień</option>
              <option>Maj</option>
              <option>Czerwiec</option>
              <option>Lipiec</option>
              <option>Sierpień</option>
              <option>Wrzesień</option>
              <option>Październik</option>
              <option>Listopad</option>
              <option>Grudzień</option>
            </select>

            <input
              onChange={handleChange}
              value={text}
              placeholder="tytuł: np. 2021.02.15-19 Runtz"
            ></input>
            <label>obsada: </label>
            <input onChange={addCastFile} type="file" />
            <label>skład orkiestry: </label>
            <input onChange={addCompositionFile} type="file" />

            <button onClick={addMonth}>Dodaj</button>
          </>
        ) : null}

        <January />
        <February />
        <March />
        <April />
        <May />
        <June />
        <July />
        <August />
        <September />
        <October />
        <November />
        <December />
      </div>
    </>
  );
}


export default Cast;