import React, { useRef, useState } from "react";
import MainViewLink from "../Link/MainViewLink";
import SignOutButton from "../SignOut";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database"
import * as firebase from "firebase";

const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat() {



  
  // useEffect(() => {
  //   const users = firebase.database().ref("users");
  //   users.on("value", (snapshot) => {
  //     const user = snapshot.val();
  //     console.log(user)
  //   });
  // }, []);
  const [message, setMessage] = useState("");
  const dummy = useRef();
  const [
    messages,

  ] = useCollectionData(
    firestore.collection("chat").orderBy("createdAt"),
    { idField: "id" },
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
 
    await firestore.collection("chat").add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      email: auth.currentUser.email,
    });
    setMessage("");
    dummy.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
 

  return (
    <>
      <div className="buttons">
        <MainViewLink />
        <SignOutButton />
      </div>
      <div id="ChatContainer" className="inner-container">
        ​{" "}
        <div className="chat">
          {messages &&
            messages.map((message) => {
              return (
                <div
                  key={message.id}
                  style={{
                    padding: 20,
                  }}
                >
                  <div>
                    <span>
                      {" "}
                      <img src="person.png" alt="icon"></img>
                      {message.email}{" "}
                    </span>
                    <span>
                      {message.createdAt &&
                        new Date(
                          message.createdAt.seconds * 1000,
                        ).toLocaleString()}
                    </span>
                  </div>
                  <p>{message.text}</p>
                </div>
              );
            })}
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
            <img
              src="https://www.searchpng.com/wp-content/uploads/2019/02/Send-Icon-PNG-1-715x657.png"
              alt="sendMessage"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Chat;
