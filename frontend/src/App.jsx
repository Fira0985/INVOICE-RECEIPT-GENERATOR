import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [isRegisterd, setIsRegistered] = useState(true)

  function getData(registered){
    setIsRegistered(registered)
  }

  function login(loged){
    if (loged == true){
      console.log("User is logged in successfully")
    }
  }

  return (
    <div className="home-container">
      {isRegisterd? <Login registered={getData} loged={login}/>:<Signup registered={getData}/>}
    </div>
  );
};

export default App;
