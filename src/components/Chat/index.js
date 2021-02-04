/* eslint no-useless-escape: 0 */
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import ScrollableFeed from "react-scrollable-feed";
import MainViewLink from "../Link/MainViewLink";
import SignOutButton from "../SignOut";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database"
import * as firebase from "firebase";
const db = firebase.firestore();
const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat() {

const [name, setName] = useState("");

  useEffect(() => {
    db.collection("profile")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let element = doc.data();
          if (auth.currentUser.email === element.email) {
            const name = element.name;
            setName(name);
          }
        })
      });
  }, []);

  const [message, setMessage] = useState("");
  const dummy = useRef();
  const [messages] = useCollectionData(
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
  useLayoutEffect(() => {
    dummy.current.scrollIntoViewIfNeeded({
        behavior: "auto",     
      
    });
  });
   
  async function onSubmit() {
    await firestore.collection("chat").add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      name: name,
      userUid: "AIzaSyAZcfS2u1phsAET9-8F7_L1A_LuSBCnCYU",

      // email: auth.currentUser.email,
    });

    setMessage("");
  
  }

  return (
    <>
      {" "}
      <div className="buttons">
        <MainViewLink />
        <SignOutButton />
      </div>
      <div id="chatbox" className="inner-container">
        ​{" "}
        <ScrollableFeed>
          <div id="chatmessages" className="chat">
            {" "}
            {messages &&
              messages.map((message) => {
                return (
                  <div
                    className="chatContainer"
                    key={message.id}
                    style={{
                      padding: 10,
                    }}
                  >
                    {message.name === name ? (
                      <div
                        className="chatRight"
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          flexDirection: "column",
                        }}
                      >
                        <div>
                          <span>
                            {" "}
                            {message.name},{" "}
                          </span>

                          <span>
                            {message.createdAt &&
                              new Date(
                                message.createdAt.seconds * 1000,
                              ).toLocaleString()}
                          </span>
                        </div>
                        <p style={{ background: "#D4D0CF" }}>{message.text}</p>
                      </div>
                    ) : (
                      <div
                        className="chatLeft"
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          flexDirection: "column",
                        }}
                      >
                        <div>
                          <span>
                            {" "}
\                            {message.name},{" "}
                          </span>

                          <span>
                            {message.createdAt &&
                              new Date(
                                message.createdAt.seconds * 1000,
                              ).toLocaleString()}
                          </span>
                        </div>
                        <p style={{ background: "lightblue", float: "left" }}>
                          {message.text}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            <div ref={dummy}></div>
          </div>
        </ScrollableFeed>
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
