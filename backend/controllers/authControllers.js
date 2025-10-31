const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const {PrismaClient} = require('@prisma/client')
// const prisma = new PrismaClient()
const prisma =require('../utils/prisma.js')

async function signup(req, res) {
    console.log("sign up success")
    const {username, email, password} = req.body
    try{
        const existingUser = await prisma.user.findUnique({where: {email}})

        if (existingUser){
            return res.status(400).json({message: "Email already registered"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        console.log("hashed",hashedPassword)
        const newUser = await prisma.user.create({
            data: {username, email, password: hashedPassword}
        })
        return res.status(201).json({message: "Registration successful", user: {id: newUser.id, username: newUser.username, email: newUser.email}})

    } catch(error){
        console.error(error)
        return res.status(500).json({error: "Something went wrong"})
    }
}

async function login(req, res) {
    console.log("logged in")
    const {email, password} = req.body
    
    try{
        const existingUser = await prisma.user.findUnique({where: {email}})
        if (!existingUser){
            return res.status(400).json({message: "User not found"})
        } 

        const bool = await bcrypt.compare(password, existingUser.password)
        if (!bool){
            return res.status(400).json({message: "Invalid credentials"})
        } 

        const token = jwt.sign({id: existingUser.id}, process.env.JWT_SECRET, {expiresIn: '7d'})
        return res.status(200).json({message: "Login successful", token, user: {id: existingUser.id, username: existingUser.username, email: existingUser.email}})

    } catch(error){
        console.error(error)
        return res.status(500).json({error: "Something went wrong"})
    }
    
} 

module.exports = {signup, login}