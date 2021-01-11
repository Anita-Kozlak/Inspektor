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
      {/* <Calendar /> */}
      {/* <p className="headingWorkPlan">PLAN PRACY</p>
      <div className="container">
        <div className="plans">
          <div className="weeks">
            <div className="view">wrzesień</div>
            <Link
              to="/firstweek"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h2 className="week">1-5.09.2020r</h2>{" "}
            </Link>
            <h2 className="week">7-11.09.2020r</h2>
            <h2 className="week">3 tydzień</h2>
            <h2 className="week">4 tydzień</h2>
          </div>
          <div className="weeks">
            <div className="view">październik</div>
            <h2 className="week">1 tydzień</h2>
            <h2 className="week">2 tydzień</h2>
            <h2 className="week"> 3 tydzień</h2>
            <h2 className="week">4 tydzień</h2>
          </div>
          <div className="weeks">
            <div className="view">listopad</div>
            <h2 className="week">1 tydzień</h2>
            <h2 className="week">2 tydzień</h2>
            <h2 className="week"> 3 tydzień</h2>
            <h2 className="week">4 tydzień</h2>
          </div>
          <div className="weeks">
            <div className="view">grudzień</div>
            <h2 className="week">1 tydzień</h2>
            <h2 className="week">2 tydzień</h2>
            <h2 className="week"> 3 tydzień</h2>
            <h2 className="week">4 tydzień</h2>
          </div> */}
      {/*    <div className="weeks">*/}
      {/*        <div className="view">styczeń</div>*/}
      {/*        <h2 className="week">1 tydzień</h2>*/}
      {/*        <h2 className="week">2 tydzień</h2>*/}
      {/*        <h2 className="week">3 tydzień</h2>*/}
      {/*        <h2 className="week">4 tydzień</h2>*/}
      {/*    </div>*/}
      {/*</div>*/}
      {/*<div className="plans">*/}
      {/*    <div className="weeks">*/}
      {/*        <div className="view">luty</div>*/}
      {/*        <h2 className="week">1 tydzień</h2>*/}
      {/*        <h2 className="week">2 tydzień</h2>*/}
      {/*        <h2 className="week">3 tydzień</h2>*/}
      {/*        <h2 className="week">4 tydzień</h2>*/}
      {/*    </div>*/}
      {/*    <div className="weeks">*/}
      {/*        <div className="view ">marzec</div>*/}
      {/*        <h2 className="week">1 tydzień</h2>*/}
      {/*        <h2 className="week">2 tydzień</h2>*/}
      {/*        <h2 className="week">3 tydzień</h2>*/}
      {/*        <h2 className="week">4 tydzień</h2>*/}
      {/*    </div>*/}
      {/*    <div className="weeks">*/}
      {/*        <div className="view">kwiecień</div>*/}
      {/*        <h2 className="week">1 tydzień</h2>*/}
      {/*        <h2 className="week">2 tydzień</h2>*/}
      {/*        <h2 className="week"> 3 tydzień</h2>*/}
      {/*        <h2 className="week">4 tydzień</h2>*/}
      {/*    </div>*/}
      {/*    <div className="weeks">*/}
      {/*        <div className="view ">maj</div>*/}
      {/*        <h2 className="week">1 tydzień</h2>*/}
      {/*        <h2 className="week">2 tydzień</h2>*/}
      {/*        <h2 className="week"> 3 tydzień</h2>*/}
      {/*        <h2 className="week">4 tydzień</h2>*/}
      {/*    </div>*/}
      {/*    <div className="weeks">*/}
      {/*        <div className="view ">czerwiec</div>*/}
      {/*        <h2 className="week">1 tydzień</h2>*/}
      {/*        <h2 className="week">2 tydzień</h2>*/}
      {/*        <h2 className="week"> 3 tydzień</h2>*/}
      {/*        <h2 className="week">4 tydzień</h2>*/}
      {/*    </div>*/}
      {/* </div>
      </div> */}
    </>
  );
};

export default WorkPlan;
