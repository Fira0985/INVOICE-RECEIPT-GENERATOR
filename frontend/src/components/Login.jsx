import React from "react";
import "../styles/Login.css";

const Login = (props) => {
    const loginRequest = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form[0].value;
        const password = form[1].value;

        try {
            const response = await fetch(`http://localhost:3000/login?email=${email}&password=${password}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                form.reset(); // Reset form after successful registration
                props.loged(true); // Notify parent component
            } else {
                alert(data.message || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    function sendData() {
        props.registered(false)
    }
    return (
        <div className="login-container">
            <h2>INVOICE & RECEIPT GENERATOR</h2>
            <form action="#" onSubmit={loginRequest}>
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
