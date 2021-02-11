import React, { useState, useEffect, useContext } from "react";
import { firestore } from "../../firebase/firebaseConfig";
import DeleteIcon from "@material-ui/icons/Delete";
import AppContext from "../../context";

const September = () => {
  
  const context = useContext(AppContext);
  const [september, setSeptember] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await firestore.collection("Wrzesień").get();
      setSeptember(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
  //   const onDelete = () => {
  //     firestore.collection("Maj").doc(february.id).delete();
  //   };

  return (
    <div>
      <h1>Wrzesień</h1>
      <ul>
        {september.map((month) => {
          return (
            <li key={month.file}>
              <div className="castFiles">
                <div>
                  <a href={month.castFile}>obsada: {month.text}</a>
                  {context.currentUser.admin ? <DeleteIcon /> : null}{" "}
                </div>
                <div>
                  <a href={month.compositionFile}>
                    skład orkiestry: {month.text}
                  </a>
                  {context.currentUser.admin ? <DeleteIcon /> : null}{" "}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default September;
