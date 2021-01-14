  
import React, { useEffect, useState } from "react";
import * as firebase from "firebase";

const auth = firebase.auth();
const db = firebase.firestore();

  const Calendar = () => {
const [emails, setEmails] = useState([])

useEffect(() => {
  db.collection("profile")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc, index) => {
        let element = doc.data();
        console.log(element.email)
        setEmails(element.email)
      });
    });
}, []);


    
  var gapi = window.gapi
  /* 
    Update with your own Client Id and Api key 
  */

  
  var CLIENT_ID =
    "175611888660-fmkdm4f5nnf2ds7cl5buq1bmo1i52rie.apps.googleusercontent.com";
  var API_KEY = "AIzaSyA0Ur5B7wY2ejWp2xIMFK5aLKFGhT6xr5Y";
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"

  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        
        var event = {
          'summary': 'próba - sala główna!',
          'location': 'NFM',
          'description': 'A. Witt - dyrygent',
          'start': {
            'dateTime': '2020-02-20T02:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'end': {
            'dateTime': '2020-02-20T12:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'recurrence': [
            // 'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
            { 'email' : 'cartman07@o2.pl'},
            {'email': 'anna1.kozlak@gmail.com'},
            {'email': 'rafalkluska86@gmail.com'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
            //   {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        }


        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event,
        })

        request.execute(event => {
          console.log(event)
          window.open(event.htmlLink)
        })
        

        /*
            Uncomment the following block to get events
        */
        
        // get events

        
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(response => {
          const events = response.result.items
          console.log('EVENTS: ', events)
        })
      
    

      })
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button style={{width: 200, height: 50, marginBottom: 50}} onClick={handleClick}>Dodaj plan pracy</button>
      </header>
    </div>
  );
}
export default Calendar