import React, { useEffect, useState } from "react";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";

import HomePage from "./components/HomePage";
import { RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebaseSetup";
import { login } from "./redux/authSlice";

function App() {
  const [showSignIn, setShowSignIn] = useState(true);
  const isLoggedIn = useSelector(
    (state: RootState) => state.authReducer.isloggedIn
  );
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(() => setIsLoading(false));

    if (auth.currentUser) {
      dispatch(login(auth.currentUser));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  let user = auth.currentUser;
  console.log(user);

  return (
    <div className="App">
      {!isLoggedIn && showSignIn && <SignIn setShowSignIn={setShowSignIn} />}
      {!isLoggedIn && !showSignIn && <SignUp setShowSignIn={setShowSignIn} />}
      {isLoggedIn && <HomePage />}
    </div>
  );
}

export default App;
