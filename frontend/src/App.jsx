import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [isRegisterd, setIsRegistered] = useState(true)

  function getData(registered){
    setIsRegistered(registered)
  }

  return (
    <div>
      {isRegisterd? <Login registered={getData} />:<Signup registered={getData}/>}
    </div>
  );
};

export default App;
