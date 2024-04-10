import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TiWarning } from 'react-icons/ti';
import './SignInForm.css';

const SignIn = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [alreadyExist, setAlreadyExist] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`https://aeonaxytaskbackend.onrender.com/register`, {
                name,
                username,
                email,
                password
            });

            if (!data.success) {
                alert(data.message);
                setAlreadyExist(true)

            } else {
                setAlreadyExist(true)
                const userData = {
                    token: data.Token,
                    email: data.email
                };
                localStorage.setItem("userData", JSON.stringify(userData));
                alert('Signup successful');
                navigate('/private');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="signIn_container">
            <div className="alreadyUser">
                <p className="existUser">
                    Already a member? <a href="/signin">Sign In</a>
                </p>
            </div>
            <div className="signInContainer">
                <div className="signInForm_container">
                    <form onSubmit={handleSubmit}>
                        <div className="input_container">
                            <div>
                                <h2 className="heading">Sign up to Dribbble</h2>
                            </div>
                            <div className="input_container_2">
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="username">
                                        {alreadyExist ? <TiWarning className="warningIcon" /> : <></>}
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className={alreadyExist ? "inputUsername" : ""}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Example@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="6+ characters"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="checkbox_container">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    checked={agreeTerms}
                                    onChange={() => setAgreeTerms(!agreeTerms)}
                                />
                                <label htmlFor="terms" className="checkbox_label">
                                    Creating an account means you're okay with our{' '}
                                    <a href="/terms">Terms of Service, Privacy Policy, and our default Notification Settings</a>
                                </label>
                            </div>

                            <button type="submit" className={agreeTerms ? 'custom_button' : 'disableButton'}>
                                Create Account
                            </button>
                            <p className="note">
                                This site is protected by reCAPTCHA and the Google{' '}
                                <a href="/">Privacy and Terms of Service</a> apply
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
