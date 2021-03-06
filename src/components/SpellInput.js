import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { firestore } from "../firebase/firebaseConfig";


 const SpellInput = ({ info }) => {

//update

//   const onUpdate = () => {
//     const db = firebase.firestore();
//     db.collection("info")
//       .doc(info.id)
//       .set({ ...info, text: info.text, file: info.file });
//   };

  const onDelete = () => {
    firestore.collection("info").doc(info.id).delete();
  };

  return (
    <>
        <span style={{cursor: "pointer"}}onClick={onDelete}><DeleteIcon /></span>
    </>
  );
};
export default SpellInput;