import React from 'react'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Message from 'pages/Message'
import Profile from 'pages/Profile'
import Register from 'pages/Register'
import Started from 'pages/Started'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function AppRoute (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Started />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/message' element={<Message />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}