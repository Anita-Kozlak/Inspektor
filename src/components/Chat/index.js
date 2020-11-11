import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

function Chat(props) {
  const [message, setMessage] = useState("");
  const dummy = useRef()
  
  const [
      messages
     // loading,
    // error,
  ] = useCollectionData(
    props.firebase.firestore.collection("chat").orderBy("createdAt"),
    { idField: "id" }
  );


  function onChange(event) {
    setMessage(event.target.value);
  }
  
  async function onKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      await onSubmit();
    }
  }
  
  async function onSubmit() {
    // console.log({ message });
    // console.log(props.firebase.auth.currentUser.email);
    console.log(props.firebase.auth.currentUser.username);
    
    if (!props.firebase.auth.currentUser) {
      throw new Error("User not logged in!");
    }

    await props.firebase.firestore.collection("chat").add({
      text: message,
      createdAt: props.firebase.firestore.FieldValue.serverTimestamp(),
      email: props.firebase.auth.currentUser.email,
    

    });
    setMessage("");
    dummy.current.scrollIntoView({ behavior: "smooth" })
  }
  
  return (
    <div id="ChatContainer" className="inner-container">

      <Link to={ROUTES.MAIN_VIEW}>
        <span className="close" />
      </Link>
     
​   <div className="chat">
        {messages &&
          messages.map((message) =>
          {
            return  (
             <div
                key={message.id}
                style={{
                  padding: 20,
                }}
              >
                <span>{message.email} {message.createdAt && new Date(message.createdAt.seconds*1000).toLocaleTimeString()}</span>
                <p>{message.text}</p>
                </div>
            )
           }
           ) }
        <div ref={dummy}></div>
     </div>

     <div className="chat-input">
        
        <textarea
          placeholder="Napisz wiadomość..."
          onChange={onChange}
          value={message}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>
          <img src ="https://www.searchpng.com/wp-content/uploads/2019/02/Send-Icon-PNG-1-715x657.png" alt="sendMessage"/>
      </button>
      </div>
   </div>
  );
}

export default withFirebase(Chat);