import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [isRegisterd, setIsRegistered] = useState(true)
  const [isLoged, setIsLoged] = useState(() => {
    return (sessionStorage.getItem("isLoged")) || false
  })
  const [name, setName] = useState("Fuad")

  function getData(registered) {
    setIsRegistered(registered)
  }

  function login(loged) {
    if (loged == true) {
      sessionStorage.setItem("isLoged", true)
      setIsLoged(true)
    }
  }

  function getName(name){
    setName(name)
  }

  return (
    <div>
      {isLoged ? <Dashboard name={name} /> : <div className="home-container">
        {isRegisterd ? <Login registered={getData} loged={login} name={getName} /> : <Signup registered={getData} />}
      </div>}
    </div>
  );
};

export default App;
