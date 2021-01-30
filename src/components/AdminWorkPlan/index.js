  
import React, { useEffect, useState } from "react";
import * as firebase from "firebase";

const db = firebase.firestore();


const AdminWorkPlan = () => {

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [where, setWhere] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  
  const changeTitle = (e) => {
    setTitle(e.target.value)
  }
  const changeDescription = (e) => {
    setDescription(e.target.value);
      console.log(description);
    };
  const changeDataStart = (e) => {
    setStart(e.target.value);
    console.log(start)
  };
    const changeDataEnd = (e) => {
      setEnd(e.target.value);
      console.log(end);
    };

  const changeWhere = (e) => {
    setWhere(e.target.value);
  };


  return (
    <div className="admin__calendar">
      <div className="concerts">
        <div>
          <label>Tytuł (Próba, Koncert)</label>
          <input value={title} onChange={changeTitle}></input>
        </div>
        <div>
          <label>Data - od</label>
          <input
            onChange={changeDataStart}
            type="datetime-local"
            step="1"
            id="meeting-time"
            name="meeting-time"
            value={start}
            min="2018-01-01T00:00:00"
            max="2030-01-01T00:00:00"
          />
        </div>
        <div>
          <label>Data - do</label>
          <input
            onChange={changeDataEnd}
            type="datetime-local"
            step="1"
            id="meeting-time"
            name="meeting-time"
            value={end}
            min="2018-01-01T00:00"
            max="2030-01-01T00:00"
          />
        </div>
        <div>
          <label>Gdzie</label>
          <input value={where} onChange={changeWhere} />
        </div>
        <div>
          <label>Opis</label>
          <textarea type="text" value={description} onChange={changeDescription} />
        </div>
        <Calendar
          title={title}
          where={where}
          description={description}
          start={start}
          end={end}
        />
      </div>
      <iframe
        title="This is a unique title"
        src="https://calendar.google.com/calendar/embed?src=anita.kozlak%40gmail.com&ctz=Europe%2FWarsaw"
        style={{ border: 0, width: "100vw", height: "80vh" }}
      ></iframe>
      {/* <iframe
        title="This is a unique title"
        src="https://calendar.google.com/calendar/embed?src=iqopqmhjcn4ouegk95atk23ab0%40group.calendar.google.com&ctz=Europe%2FWarsaw"
        style={{ border: 0, width: "90vw", height: "80vh" }}
      ></iframe> */}
      <a href="">Styczeń</a>
    </div>
  );
};


  const Calendar = ({ title, where, description, start, end }) => {
 
    const [emails, setEmails] = useState([]);
    const [msg, setMsg] = useState("");


    useEffect(() => {
      db.collection("profile")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            let element = doc.data();
            console.log(element.email);
            setEmails((prevState) => [...prevState, element.email]);
          });
        });
    }, []);

    var gapi = window.gapi;
    /* 
    Update with your own Client Id and Api key 
  */

    var CLIENT_ID =
      "175611888660-fmkdm4f5nnf2ds7cl5buq1bmo1i52rie.apps.googleusercontent.com";
    var API_KEY = "AIzaSyA0Ur5B7wY2ejWp2xIMFK5aLKFGhT6xr5Y";
    var DISCOVERY_DOCS = [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ];
    var SCOPES = "https://www.googleapis.com/auth/calendar.events";

    const handleClick = async () => {
      gapi.load("client:auth2", () => {
        console.log("loaded client");

        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        });

        gapi.client.load("calendar", "v3", () => console.log("bam!"));

        gapi.auth2.getAuthInstance().then(() => {
          var event = {
            summary: title,
            location: where,
            description: description,
            start: {
              dateTime: start,
              timeZone: "Europe/Warsaw",
            },
            end: {
              dateTime: end,
              timeZone: "Europe/Warsaw",
            },
            recurrence: [
              // 'RRULE:FREQ=DAILY;COUNT=2'
            ],
            attendees : 
              emails.map(element => 
                [{email: element}
                ]
              ),
            
            // attendees: [
            //   { email: emails[0] },
            //   { email: emails[1] },
            //   // { email: emails[2] },
            //   // { email: emails[3] },
            //   // { email: emails[4] },
            //   // { email: emails[5] },
            //   // { email: emails[6] },
            //   // { email: emails[7] },
            //   // { email: emails[8] },
            //   // { email: emails[9] },
            //   // { email: emails[10] },
            //   // { email: emails[11] },
            // ],
            reminders: {
              useDefault: false,
              overrides: [
                //   {'method': 'email', 'minutes': 24 * 60},
                { method: "popup", minutes: 10 },
              ],
            },
          };

          //dodawanie koncertow do firestore
          
          // db.collection("event").add({
          //   summary: event.summary,
          //   location: event.location,
          //   date: {
          //     start: event.start.dateTime,
          //     end: event.end.dateTime,
          //   },
          // });

          var request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });
            
          request.execute((event) => {
            if(event.message) {
            setMsg("Źle wprowadzone dane");

            } else {
              setMsg("Dodano wydarzenie, odśwież stronę")
            }
            // window.open(event.htmlLink);
          });

         
          // get events

          gapi.client.calendar.events
            .list({
              calendarId: "primary",
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 10,
              orderBy: "startTime",
            })
            .then((response) => {
              const events = response.result.items;
              console.log("EVENTS: ", events);
            });
        });
      });
    };

    return (
      <div className="App">
        <header className="App-header">
          <span className="error">{msg}</span>
          <button className="btn"
            onClick={handleClick}
          >
            Dodaj
          </button>
        </header>
      </div>
    );
  };;
export default AdminWorkPlan;