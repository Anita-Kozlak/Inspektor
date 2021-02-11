import React, { useState, useEffect, useContext } from "react";
import { firestore } from "../../firebase/firebaseConfig";
import DeleteIcon from "@material-ui/icons/Delete";
import AppContext from "../../context";

const February = () => {

  const context = useContext(AppContext);

  const [february, setFebruary] = useState([]);
 
    
  useEffect(() => {
    const fetchData = async () => {
      const data = await firestore.collection("Luty").get();
      setFebruary(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
  const onDelete = () => {
    firestore.collection("Luty").doc(february.id).delete();
  };

  return (
    <div>
      <h1>Luty</h1>
      <ul>
        {february.map((month) => {
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

export default February;
