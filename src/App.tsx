import React, { useState } from "react";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";

import HomePage from "./components/HomePage";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

function App() {
  const [showSignIn, setShowSignIn] = useState(true);
  const isLoggedIn = useSelector(
    (state: RootState) => state.authReducer.isloggedIn
  );
  return (
    <div className="App">
      {!isLoggedIn && showSignIn && <SignIn setShowSignIn={setShowSignIn} />}
      {!isLoggedIn && !showSignIn && <SignUp setShowSignIn={setShowSignIn} />}
      {isLoggedIn && <HomePage />}
    </div>
  );
}

export default App;
