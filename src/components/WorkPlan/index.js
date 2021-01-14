import React from "react";
import MainViewLink from "../Link/MainViewLink";
import SignOutButton from "../SignOut";
import Calendar from "../Calendar"

const WorkPlan = () => {
  return (
    <>
      {" "}
      <div className="buttons">
        <MainViewLink />
        <SignOutButton />
      </div>
      <div className="firstWeek">
        <Calendar />
        <iframe
          title="This is a unique title"
          src="https://calendar.google.com/calendar/embed?src=iqopqmhjcn4ouegk95atk23ab0%40group.calendar.google.com&ctz=Europe%2FWarsaw"
          style={{ border: 0, width: "90vw", height: "80vh" }}
        ></iframe>
      </div>
    
    </>
  );
};

export default WorkPlan;
