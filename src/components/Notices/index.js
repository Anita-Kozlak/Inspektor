import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const firestore = firebase.firestore();


const Notices = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    firestore
      .collection("info")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let element = doc.data();

          setInfo((prevState) => {
            return [...prevState, { text: element.text, file: element.file }];
          });
        });
      });
  }, []);

  return (
    <div>
      <ul>
        {info.map((file) => {
          return (
            <li key={file.text}>
              <div className="adminInfo__notices">
                <p>{file.text} </p>
                <a href={file.file}>
                  <CloudDownloadIcon style={{ color: "blue" }} />
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Notices;
