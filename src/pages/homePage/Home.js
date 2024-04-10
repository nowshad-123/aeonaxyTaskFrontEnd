import React, { useEffect, useState } from 'react'
import Navbar from './../../Components/Navbar/Navbar';
import { FaEnvelope } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import './home.css'
import Footer from '../../Components/Footer/Footer';

export const Home = () => {
    const [email, setEmail] = useState('')
    useEffect(() => {
        const userData = localStorage.getItem('userData')
        const parsedEmail = JSON.parse(userData)
        if (parsedEmail.email !== '' && parsedEmail.email !== undefined) {
            setEmail(parsedEmail.email)
        }
    }, [])

    return (
        <div className='mainContainer'>
            <div><Navbar /></div>
            <div className='contentsContainer'>
                <h1>Please verify your email...</h1>
                <div className='EnvolopeIconContainer'>
                    <FaEnvelope className='envolope' />
                    <div className="checkContainer">
                        <FaCircleCheck className='checkMark' />
                    </div>
                </div>
                <p>Please verify your email address, We've sent a confirmation email to:</p>
                <h5 >{email}</h5>
                <p>Click the confirmation link in that email to begin using Dribbble.</p>
                <p>Didn't recieve the email? Check your Spam folder, it may have been caught by a filter. if you still dont'see it, you can <a>resend the confirmation email</a></p>
                <p>Wrong email address? <a>Change it.</a></p>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
