import React, { useState, useEffect, useContext } from "react";
import { firestore } from "../../firebase/firebaseConfig";
import DeleteIcon from "@material-ui/icons/Delete";
import AppContext from "../../context";

const March = () => {

    const context = useContext(AppContext);

    const [march, setMarch] = useState([]);

     useEffect(() => {
       const fetchData = async () => {
         const data = await firestore.collection("Marzec").get();
         setMarch(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
       };
       fetchData();
     }, []);
    return (
      <div>
        <h1>Marzec</h1>
        <ul>
          {march.map((month) => {
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
}

export default March
