import "./App.css";
import AuthScreen from "./pages/AuthScreen";
import HomeScreen from "./pages/HomeScreen";
import { useState } from "react";

function App() {
  const [loggedIn, setloggedIn] = useState(
    sessionStorage.getItem("jwt") ? true : false
  );


  return (
    <>
      {loggedIn ? (
        <HomeScreen setloggedIn={setloggedIn} />
      ) : (
        <AuthScreen setloggedIn={setloggedIn} />
      )}
    </>
  );
}

export default App;
