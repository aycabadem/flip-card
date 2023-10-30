import React, { useEffect, useState } from "react";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";

import HomePage from "./components/HomePage";
import { RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebaseSetup";
import { login } from "./redux/authSlice";
import { Routes, Route, useNavigate } from "react-router-dom";
import Practice from "./components/Practice";
import Words from "./components/Words";

function App() {
  const navigate = useNavigate();
  // const [showSignIn, setShowSignIn] = useState(true);
  const isLoggedIn = useSelector(
    (state: RootState) => state.authReducer.isloggedIn
  );
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(() => setIsLoading(false));

    if (auth.currentUser) {
      dispatch(login(auth.currentUser));
      navigate("/");
    } else {
      navigate("signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  let user = auth.currentUser;
  console.log(user);

  return (
    <div className="App">
      {/* {!isLoggedIn  && <SignIn setShowSignIn={setShowSignIn} />}
      {!isLoggedIn && !showSignIn && <SignUp setShowSignIn={setShowSignIn} />}
      {isLoggedIn && <HomePage />} */}
      <Routes>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<HomePage />}>
          <Route path="practice" element={<Practice />}></Route>
          <Route path="words" element={<Words />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
