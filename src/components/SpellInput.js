import React from "react";
import * as firebase from "firebase";
import DeleteIcon from "@material-ui/icons/Delete";


 const SpellInput = ({ info }) => {

//update

//   const onUpdate = () => {
//     const db = firebase.firestore();
//     db.collection("info")
//       .doc(info.id)
//       .set({ ...info, text: info.text, file: info.file });
//   };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("info").doc(info.id).delete();
  };

  return (
    <>
        <span style={{cursor: "pointer"}}onClick={onDelete}><DeleteIcon /></span>
    </>
  );
};
export default SpellInput;