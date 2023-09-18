import React from "react";

import ResponsiveAppBar from "./AppBar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Practice from "./Practice";
import Words from "./Words";

const HomePage = () => {
  const index = useSelector((state: RootState) => state.appReducer.index);
  return (
    <>
      <ResponsiveAppBar />
      {index === 0 ? <Practice /> : <Words />}
    </>
  );
};

export default HomePage;
