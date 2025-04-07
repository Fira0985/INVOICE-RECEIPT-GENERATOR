import React from "react";
import "../styles/Signup.css";

const Signup = (props) => {
    // Register function to handle form submission
    const Register = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form[0].value;
        const email = form[1].value;
        const password = form[2].value;
        const confirmPassword = form[3].value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                form.reset(); // Reset form after successful registration
                props.registered(true); // Notify parent component
            } else {
                alert(data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    // Function to handle login page redirection
    function sendData() {
        props.registered(true);
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
                    <p>
                        Already have an account?{" "}
                        <span onClick={sendData} style={{ cursor: "pointer", color: "blue" }}>
                            Log in
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
