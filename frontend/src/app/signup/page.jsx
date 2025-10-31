"use client"
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import axios from "axios"
import "./SignupPage.css"
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { easeOut } from 'framer-motion'
const SignupPage = () => {
    const [user,setUser]=useState({
        email:"",password:"",username:""
    })
    const [agree,setAgree]=useState(false)
    const onSignup=async(e)=>{
        e.preventDefault()
        const email=user.email.trim()
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        // const mobileRegex=/^[0-9]{10}$/
        if(!email || !user.username || !user.password){
            toast.error("Please fill all the fields")
            return
        }
        if(!emailRegex.test(email)){
            toast.error("Enter a Valid email")
            return 
        }
        if(!agree){
            toast.error("Please agree to terms")
            return
        }

        toast.success("User Created Successfully")
        
        const response=await fetch("http://localhost:3001/api/auth/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })

        const data=await response.json()
        console.log(data)
        
        if(response.ok){
            toast.success("User Created Successfully")
            localStorage.setItem("token",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
        }else{
            toast.error("User Not Created")
            return 
        }
    }
   

  return (
    <div className='login-container'>
        <div className='login-box'>
        <h1>Signup</h1>
        <form>
        <label className='label' htmlFor='username'>Full Name</label>
        <input className={"input"} type="text" placeholder='Full Name' name="username" id="username" onChange={(e)=>setUser({...user,username:e.target.value})} />
        <label className='label' htmlFor='email' >Email</label>
        <input className={"input"} type="text" placeholder="Email" name="email" id="email" onChange={(e)=>setUser({...user,email:e.target.value})} />
        <label className='label' htmlFor='password'>Enter Password</label>
        <input className={"input"} type="password"  placeholder="Password" name="password" id="password" onChange={(e)=>setUser({...user,password:e.target.value})} />
                <FormControlLabel
        sx={{color:"grey"}}
        control={<Checkbox checked={agree} onChange={(e)=>setAgree(e.target.checked)} />}
        label="I agree to terms"
        />
        <button className='button' onClick={onSignup}>Signup</button>
        </form>
        <Link href="/login">Login</Link>
        </div>
        <div>
            <img className='image' src="./image.png"/>
        </div>
    </div>
  )
}

export default SignupPage;