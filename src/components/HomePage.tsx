import React, { useEffect } from "react";

import ResponsiveAppBar from "./AppBar";

import { Outlet, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("practice");
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      {/* <Routes>
        <Route path="/" element={<Practice />}></Route>
        <Route path="/words" element={<Words />}></Route>
      </Routes> */}

      <Outlet />
    </>
  );
};

export default HomePage;
