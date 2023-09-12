import React, { useState } from "react";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";

function App() {
  const [showSignIn, setShowSignIn] = useState(true);
  return (
    <div className="App">
      {showSignIn && <SignIn setShowSignIn={setShowSignIn} />}
      {!showSignIn && <SignUp setShowSignIn={setShowSignIn} />}
    </div>
  );
}

export default App;
