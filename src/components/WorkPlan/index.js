import React from "react";
import MainViewLink from "../Link/MainViewLink";
import SignOutButton from "../SignOut";

const WorkPlan = () => {
  return (
    <>
      {" "}
      <div className="buttons">
        <MainViewLink />
        <SignOutButton />
      </div>
      <div className="calendar">
        {/* <iframe
          title="This is a unique title"
          src="https://calendar.google.com/calendar/embed?src=anita.kozlak%40gmail.com&ctz=Europe%2FWarsaw"
          style={{ border: 0, width: "90vw", height: "80vh"}}
        ></iframe> */}
        <iframe
          title="This is a unique title"
          src="https://calendar.google.com/calendar/embed?src=iqopqmhjcn4ouegk95atk23ab0%40group.calendar.google.com&ctz=Europe%2FWarsaw"
          style={{ border: 0, width: "90vw", height: "80vh" }}
        ></iframe>
        <div className="message">
          <h2>Wyślij wiadomość do orkiestry o zmianie w planie pracy</h2>
          <input></input>
        </div>
      </div>
    </>
  );
};

export default WorkPlan;
