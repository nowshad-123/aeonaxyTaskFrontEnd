import React, { useState } from 'react';
import './category.css'
import Logo from '../../Assets/dribbble.js'
import Options from '../../Components/options/Options.js'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export const Category = () => {
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const navigate = useNavigate();


    const handleOptionSelect = (selected) => {
        setIsOptionSelected(selected);
    };

    const handleEmailSent = async () => {
        try {
            const userData = localStorage.getItem("userData")
            const parse = JSON.parse(userData)
            const token = parse.token
            const { data } = await axios.post("http://localhost:4000/verificationEmail", { token })
            if (!data.success) {
                alert("Enter the valid Email")
                navigate('/')
            } else {
                alert("Email sent Successfully")
                navigate("/private/home")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="category_mainContainer">
            <div className="logoContainer">
                <Logo color="#ea4b8b" height="80px" width="80px" className="logo" />
            </div>
            <div className="contentContainer">
                <h2>What brings you to Dibbble?</h2>
                <p>Select the option that vest describe you. Don't worry, you can explore other options later</p>
                <div className="optionsContainer">
                    <Options onSelect={handleOptionSelect} />
                </div>
                <div>
                    <h6 style={{ margin: '0px' }}>Anything else? You can select multiple</h6>

                    <div className='option_nextButton_container'>
                        <button className={`custom_button ${isOptionSelected ? '' : 'disable'}`} onClick={handleEmailSent} disabled={!isOptionSelected}>Next</button>

                        <div className='defaultImages'>or press Return</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
