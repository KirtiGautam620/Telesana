"use client";
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import "./LoginPage.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const LoginPage = () => {
    const router = useRouter();
    const [user, setUser] = useState({ email: "", password: "" });
    const [agree, setAgree] = useState(false);

    const onLogin = async (e) => {
        e.preventDefault();
        const email = user.email.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email || !user.password) {
            toast.error("Please Enter Email and Password");
            return;
        }
        if (!emailRegex.test(email)) {
            toast.error("Enter a Valid email or Mobile");
            return;
        }
        if (!agree) {
            toast.error("Please agree to terms");
            return;
        }
        try {
            const response = await fetch("http://localhost:4000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            console.log("user logged in");
            if (response.ok) {
                toast.success("Login Successfully");
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                router.push('/dashboard');
            } else {
                toast.error(data.message || "Login Failed");
            }
        } catch (err) {
            toast.error("Something went wrong");
            console.log(err);
        }
    };

    return (
        <div className='login-container'>
            <div className='login-box'>
                <h1>Login</h1>
                <form onSubmit={onLogin}>
                    <label className='label' htmlFor='email'>Email ID</label>
                    <input 
                        className="input" 
                        type="text" 
                        name="email" 
                        value={user.email} 
                        placeholder='Email' 
                        id="email" 
                        onChange={(e) => setUser({ ...user, email: e.target.value })} 
                    />
                    <label className='label' htmlFor='password'>Password</label>
                    <input 
                        className='input' 
                        type="password" 
                        name="password" 
                        placeholder='Password' 
                        id="password" 
                        onChange={(e) => setUser({ ...user, password: e.target.value })} 
                    />
                    <FormControlLabel 
                        sx={{ color: "grey" }} 
                        control={<Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} />} 
                        label="Remember Me For 30 days" 
                    />
                    <button className="button" type='submit'>Login</button>
                </form>
                
            
                <div style={{ marginTop: "20px", textAlign: "center", color: "#555" }}>
                    <p>Don't have an account? <Link href="/signup" style={{ color: "#678bee", fontWeight: "bold" }}>Sign Up</Link></p>
                </div>
            </div>
            <div>
                <img className='image' src="./img.png" alt="Login Illustration" />
            </div>
        </div>
    );
};

export default LoginPage;



  