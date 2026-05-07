import React, { useState } from "react";

import {
    Link,
    useNavigate
} from "react-router-dom";

import {
    createUserWithEmailAndPassword
} from "firebase/auth";

import {
    auth
} from "../firebase/firebaseConfig";

import "../styles/Auth.css";

const Signup = () => {
    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    // Handle Input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle Signup
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            alert("Account Created Successfully!");

            navigate("/login");

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="auth-page">

            <div className="auth-container">

                <h1>Create Account</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        onChange={handleChange}
                    />

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
                        Signup
                    </button>

                </form>

                <p>
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>

            </div>

        </div>
    );
};

export default Signup;