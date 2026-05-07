import React, { useState } from "react";

import {
    Link,
    useNavigate
} from "react-router-dom";

import {
    signInWithEmailAndPassword
} from "firebase/auth";

import {
    auth
} from "../firebase/firebaseConfig";

import "../styles/Auth.css";

const Login = () => {
    // Form State
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle Login
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            alert("Login Successful!");

            navigate("/");

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="auth-page">

            <div className="auth-container">

                <h1>Login</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p>
                    Don't have an account?
                    <Link to="/signup"> Signup</Link>
                </p>

            </div>

        </div>
    );
};

export default Login;