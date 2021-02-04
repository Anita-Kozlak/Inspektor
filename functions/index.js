const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);


 exports.sendNotificationToFCMToken = functions.firestore
   .document("chat/{mUid}")
   .onWrite(async (event) => {
     const uid = event.after.get("userUid");
     const name = event.after.get("name");
     const text = event.after.get("text");
     let userDoc = await admin.firestore().doc(`users/${uid}`).get();
     let fcmToken = userDoc.get("fcm");

     var message = {
       token: fcmToken,

       notification: {
         title: name,
         body: text,
       },
     };

     let response = await admin.messaging().send(message);
     console.log(response);
   });

