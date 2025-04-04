import React from "react";
import "../styles/Signup.css";

const Signup = (props) => {
    function Register() {

    }

    function sendData(){
        props.registered(true)
    }
    return (
        <div className="signup-container">
            <h2>Create an Account</h2>
            <form action="#" onSubmit={Register}>
                <div className="signup-form">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <button>Sign Up</button>
                    <p>Already have an account? <span onClick={sendData}>Log in</span></p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
