import React from "react";
import FlippableCard from "./flippable-card";

const Practice = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
      }}
    >
      <FlippableCard />
    </div>
  );
};

export default Practice;
