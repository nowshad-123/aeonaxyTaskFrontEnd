import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BiSolidCameraPlus } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import './CreateProfile.css';
import Logo from '../../Assets/dribbble';

const CreateProfile = () => {
    const [isFocus, setFocus] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [location, setLocation] = useState('')
    const navigate = useNavigate()

    // Function to handle file upload
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Function to handle drag and drop
    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Prevent default behavior for drag events
    const preventDefault = (event) => {
        event.preventDefault();
    };

    const handleNextButtonClick = async () => {
        // Send post request with selected image
        try {
            const { data } = await axios.post('http://localhost:4000/uploadImage', { image: selectedImage })
            if (data.success) {


                // Retrieve the userData object from localStorage
                let userData = JSON.parse(localStorage.getItem('userData'));

                // Check if userData exists and is an object
                if (userData && typeof userData === 'object') {
                    // Add the new key to the userData object
                    userData.imageurl = (data.data.url); // Replace 'newKey' and 'value' with your actual key and value

                    // Update the localStorage with the modified userData object
                    localStorage.setItem('userData', JSON.stringify(userData));
                    // Set a timestamp for one week from now
                    const expiration = new Date();
                    expiration.setDate(expiration.getDate() + 7);
                    localStorage.setItem('expiration', expiration.getTime());
                    alert("Profile Created Successfully")
                    navigate('/private/category')

                } else {
                    console.error('userData is not present or is not an object in localStorage');
                }
            }
        } catch (error) {
            console.log(error)
        }
    };

    // Function to check if stored data has expired
    const checkExpiration = () => {
        const expiration = localStorage.getItem('expiration');
        if (expiration) {
            const now = new Date().getTime();
            if (now > expiration) {
                // Data has expired, delete it
                localStorage.removeItem('userData');
                localStorage.removeItem('expiration');
            }
        }
    };

    // Call checkExpiration when the component mounts
    useEffect(() => {
        checkExpiration();
    }, []);


    return (
        <>
            <div className='logo_container'>
                <Logo color="#ea4b8b" height="80px" width="80px" className="logo" />
            </div>
            <div className="createProfile_container">
                {/* Welcome message and other content */}
                <div>
                    <h2>Welcome! let's create your profile</h2>
                    <p>Let others get to know you better! you can do these later</p>
                </div>
                <div className="avatarCE_container">
                    <h5 style={{ margin: "30px 0px 10px 0px" }}>Add an avatar</h5>
                    <div className="uploadAvatar_container" onDrop={handleDrop} onDragOver={preventDefault}>
                        <div className="profile_container" onClick={() => document.getElementById('fileInput').click()}>
                            {selectedImage ? <img src={selectedImage} className="previewImage" alt="Selected Avatar" /> : <BiSolidCameraPlus />}
                        </div>
                        <div className='chooseImage_container'>
                            <button className='chooseImage_customButton' onClick={() => document.getElementById('fileInput').click()}>Choose image</button>
                            <div className='defaultImages'><IoIosArrowForward /> Or choose one of our defaults</div>
                        </div>
                    </div>
                    <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileUpload} />
                </div>
                {/* Location input and other content */}
                <div className="location_container">
                    <h5>Add Location</h5>
                    <input type="text" className='location_inputTag' onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} placeholder='Enter a Location' value={location} onChange={(e) => setLocation(e.target.value)} />
                    <div className={isFocus ? "input_border" : "input_border_initial"}></div>
                </div>
                <div className='nextButton_container'>

                    <button className={selectedImage ? 'custom_button' : 'disableButton'} onClick={handleNextButtonClick}>Next</button>
                    {location !== '' && selectedImage !== null ? <div className='defaultImages'>or press Return</div> : ""}
                </div>
            </div>
        </>
    );
};

export default CreateProfile;





