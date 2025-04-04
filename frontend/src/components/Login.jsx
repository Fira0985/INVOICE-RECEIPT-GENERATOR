import React from "react";
import "../styles/Login.css";

const Login = (props) => {
    function Login(){

    }

    function sendData(){
        props.registered(false)
    }
    return (
        <div className="login-container">
            <h2>INVOICE & RECEIPT GENERATOR</h2>
            <form action="#" onSubmit={Login}>
                <div className="login-form">
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Log in</button>
                    <p>Don't have an account? <span onClick={sendData}>Sign up</span></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
