"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import "./SignupPage.css"
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const SignupPage = () => {
    const router = useRouter()
    const [user,setUser]=useState({email:"",password:"",username:""})
    const [agree,setAgree]=useState(false)
    const [loading,setLoading]=useState(false)
    const onSignup=async(e)=>{
        e.preventDefault()
        const email=user.email.trim()
        const username=user.username.trim()
        const password=user.password.trim()
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
        try{
            setLoading(true)
            const response=await fetch("https://telesana.onrender.com/api/auth/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,username,password})
        })

        const data=await response.json()
        console.log(data)

        if(response.ok){
            toast.success("User Created Successfully")
            localStorage.setItem("token",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
            router.push('/dashboard')
        }else{
            toast.error(data.message || "SignUp Failed")
            setLoading(false)
        }
    }
    catch(err){
        toast.error("Something went wrong")
        console.log(err)
        setLoading(false)
    }  
}   

  return (
    <div className='login-container'>
        <div className='login-box'>
        <h1>Signup</h1>
        <form onSubmit={onSignup}>
        <label className='label' htmlFor='username'>Full Name</label>
        <input className={"input"} type="text" placeholder='Full Name' name="username" id="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} />
        <label className='label' htmlFor='email' >Email</label>
        <input className={"input"} type="text" placeholder="Email" name="email" id="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
        <label className='label' htmlFor='password'>Enter Password</label>
        <input className={"input"} type="password"  placeholder="Password" name="password" value={user.password} id="password" onChange={(e)=>setUser({...user,password:e.target.value})} disabled={loading} />
                <FormControlLabel
        sx={{color:"grey"}}
        control={<Checkbox checked={agree} onChange={(e)=>setAgree(e.target.checked)} disabled={loading} />}
        label="I agree to terms"
        />
        <button className='button' type='submit' disabled={loading}>{loading ? "Signing up..." : "Signup"}</button>
        </form>
        <Link href="/login" className='login'>Login</Link>
        </div>
        <div>
            <img className='image' src="./img.png"/>
        </div>
    </div>
  )
}

export default SignupPage;