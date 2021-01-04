import React, { useRef, useState, useEffect } from "react";
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



//notifications
// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// admin.initializeApp(functions.config().firebase);

// exports.sendNotificationToTopic = functions.firestore
//   .document("puppies/{uid}")
//   .onWrite(async (event) => {
//     //let docID = event.after.id;
//     let title = event.after.get("title");
//     let content = event.after.get("content");
//     var message = {
//       notification: {
//         title: title,
//         body: content,
//       },
//       topic: "namelesscoder",
//     };

//     let response = await admin.messaging().send(message);
//     console.log(response);
//   });

// exports.sendNotificationToFCMToken = functions.firestore
//   .document("messages/{mUid}")
//   .onWrite(async (event) => {
//     const uid = event.after.get("userUid");
//     const title = event.after.get("title");
//     const content = event.after.get("content");
//     let userDoc = await admin.firestore().doc(`users/${uid}`).get();
//     let fcmToken = userDoc.get("fcm");

//     var message = {
//       notification: {
//         title: title,
//         body: content,
//       },
//       token: fcmToken,
//     };

//     let response = await admin.messaging().send(message);
//     console.log(response);
//   });
function Chat() {
    
  const [name, setName] = useState('')


useEffect(() => {

  db.collection("profile")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        let element = doc.data();
        if (auth.currentUser.email === element.email) {
          const name = element.name;
          setName(name)

        }
      });
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

  async function onSubmit() {
   
    await firestore.collection("chat").add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      name: name
      // email: auth.currentUser.email,
    });

    setMessage("");
    dummy.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    
  }


  return (
    <>
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
                    className="chatRight"
                    key={message.id}
                    style={{
                      padding: 10,
                    }}
                  >
                    <div>
                      <span>
                        {" "}
                        {/* <img src="person.png" alt="icon"></img> */}
                        {message.name}{" "}
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
// import React from "react";
// import moment from "moment";

// const Chat = ({ messages, authUser }) => {
//   const renderMessages = (messages, authUser) => {
//     if (messages.length > 0) {
//       return messages.map((message) => {
//         // Message is from currently logged in USER
//         if (message.user.uid === authUser.uid) {
//           return (
//             <div key={message.id} className="viewWrapItemLeft">
//               <div className="viewWrapItemLeft3">
//                 <img
//                   src={message.user.avatar}
//                   alt="avatar"
//                   className="peerAvatarLeft"
//                 />
//                 <div className="viewItemLeft">
//                   <span className="textContentItem">{message.content}</span>
//                 </div>
//               </div>
//               <span className="textTimeLeft">
//                 {moment(message.timestamp).fromNow()}
//               </span>
//             </div>
//           );
//         }

//         return (
//           <div key={message.id} className="viewWrapItemRight">
//             <div className="viewWrapItemRight3">
//               <img
//                 src={message.user.avatar}
//                 alt="avatar"
//                 className="peerAvatarLeft"
//               />
//               <div className="viewItemRight">
//                 <span className="textContentItem">{message.content}</span>
//               </div>
//             </div>
//             <span className="textTimeLeft">
//               {moment(message.timestamp).fromNow()}
//             </span>
//           </div>
//         );
//       });
//     }

//     return null;
//   };

//   return renderMessages(messages, authUser);
// };

// export default Chat;