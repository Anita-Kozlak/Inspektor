import React, { useContext } from "react";
import AppContext from "../context";
import MainTemplate from "./MainTemplate";
import RingLoader from "react-spinners/RingLoader";

const Pending = () => {
    ;
  
  const context = useContext(AppContext);

  return (
    <>
      {context.currentUser.acceptance ? (
        <MainTemplate />
      ) : (
        <>
          <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            <h1
              style={{
                fontSize: 30,
                color: "white",
                fontFamily: "sans-serif",
                marginTop: 100,
                marginBottom: 50
              }}
            >
              Oczekiwanie na akceptację
            </h1>
            <RingLoader color={"white"} size={150}/>{" "}
          </div>
        </>
      )}
    </>
  );
};

export default Pending;
