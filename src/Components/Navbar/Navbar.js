import React, { useEffect, useState } from 'react';
import Logo from '../../Assets/dribbble';
import { IoSearchOutline } from "react-icons/io5";
import { BsBagX } from "react-icons/bs";
import './Navbar.css'


function Navbar() {
    const [imageurl, setImageurl] = useState('')
    useEffect(() => {
        const url = localStorage.getItem('userData')
        const parsedUrl = JSON.parse(url)
        setImageurl(parsedUrl.imageurl)
    }, [])

    return (
        <nav className="navbar navbar-expand-lg bg-body-light">
            <div className="container-fluid">
                <a className="navbar-brand ml-2" href="#">
                    <Logo color="black" height="40px" width="80px" className="logo" style={{ margin: "0px" }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="navLink active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="navLink active" aria-current="page" href="#">Find Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="navLink active" aria-current="page" href="#">Learn Design</a>
                        </li>
                        <li className="nav-item">
                            <a className="navLink active" aria-current="page" href="#">Go Pro</a>
                        </li>
                        <li className="nav-item">
                            <a className="navLink active" aria-current="page" href="#">Hire Designers</a>
                        </li>

                    </ul>
                    <div className="searchContainer">
                        <input type="text" placeholder='Search' className='SearchBar' />
                        <IoSearchOutline className='search-icon' />
                        <div className="icon_container">
                            <BsBagX />
                        </div>
                        <div className="profile">
                            <img src={imageurl} alt="" className='profileImage' />
                        </div>
                        <button className='custom_button' style={{ position: "relative", bottom: "6px", width: "90px" }}>Upload</button>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
