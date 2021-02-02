import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
const firestore = firebase.firestore();

const Notices = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    firestore
      .collection("info")
      .get()
      .then((info) => {
        const loadedInfo = info.docs.map((info) => info.data().text);
        console.log(loadedInfo);
        setInfo(loadedInfo);
      });
  }, []);

  return (
    <div>
      
      <ul>
        {info.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    
    </div>
  );
};
export default Notices;
