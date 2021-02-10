import React from "react";
import MainViewLink from "../Link/MainViewLink";
import SignOutButton from "../SignOut";

const Cast= () => {
  // const [text, setText] = useState("");
  // const [file, setFile] = useState("");
  // const [cast, setCast] = useState([]);

  // const handleChange = (e) => {
  //   setMsg(e.target.value);
  // };
  // const addJanuary = () => {
  //   firestore.collection("styczeń").add({
  //     text: text,
  //     file: file,
  //   });

  //   setMsg("");
  // };

  // const addFile = async (e) => {
  //   const file = e.target.files[0];
  //   const storageRef = firebase.storage().ref();
  //   const fileRef = storageRef.child(file.name);
  //   fileRef.put(file);
  //   setFile(await fileRef.getDownloadURL());
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await firestore.collection("styczeń").get();
  //     setInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   fetchData();
  // }, []);


  return (
    <>
      <div className="buttons">
        <MainViewLink />
        <SignOutButton />
      </div>
      <div className="castPage">
        <h1>Styczeń</h1>
        <input></input>
        <input type="file"/>

        <button>Dodaj</button>

        <h1>Luty</h1>
        <h1>Marzec</h1>
        <h1>Kwiecień</h1>
        <h1>Maj</h1>
        <h1>Czerwiec</h1>
        <h1>Lipiec</h1>
        <h1>Sierpień</h1>
        <h1>Wrzesień</h1>
        <h1>Październik</h1>
        <h1>Listopad</h1>
        <h1>Grudzień</h1>
      </div>
    </>
  );
}


export default Cast;