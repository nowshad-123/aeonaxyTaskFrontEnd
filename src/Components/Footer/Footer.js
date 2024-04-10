import React from 'react';
import './Footer.css';
import Logo from '../../Assets/dribbble';
import { FaDribbble, FaTwitter, FaFacebookSquare, FaInstagram, FaPinterest } from "react-icons/fa";
import { LiaCopyrightSolid } from "react-icons/lia";
import { TbBrandDribbbleFilled } from "react-icons/tb";


const Footer = () => {

    const forDesigners = ["Go Pro", "Explore design work", "Design blog", "Overtime podcast", "Playoffs", "Weekly Warm-up", "Refer a Friend", "Code of conduct"]
    const hireDesigners = ["Post a job opening", "Post a freelance Project", "Search for designers"]
    const brands = ["Advertise with us"]
    const company = ["About", "Careers", "Support", "Media kit", "Testimonials", " API", "Terms of services", "Privacy", "Cookie policy"]
    const directoies = ["Design jobs", "Design for hire", "Freelance designer for hire", "Tags", "Places"]
    const designAssets = ["Dribbble Marketplace", "Creative Market", "Frontspring", "Front Squirrel"]
    const designResources = ["Freelancing", "Design Hiring", "Design Portfolio", "Design Education", "Creative Process", "Design Industry Trends"]
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="columns-container">
                <div className='column1'>
                    <Logo color="#ea4b8b " height="80px" width="80px" className="logo" />
                    <p>Dribbble is the world's leading community for creatives to share, grow, and get hired</p>
                    <div className='icons_container'>
                        <FaDribbble className='icon' />
                        <FaTwitter className='icon' />
                        <FaFacebookSquare className='icon' />
                        <FaInstagram className='icon' />
                        <FaPinterest className='icon' />
                    </div>
                </div>
                <div className="column2">
                    <ul>
                        <h5>For designers</h5>
                        {forDesigners.map((p) => {
                            return <li>
                                {p}
                            </li>
                        })}
                    </ul>
                </div>
                <div className="column2">
                    <ul>
                        <h5>Hire designers</h5>
                        {hireDesigners.map((p) => {
                            return <li>
                                {p}
                            </li>
                        })}
                        <h5>Brands</h5>
                        {brands.map((p) => {
                            return <li>
                                {p}
                            </li>
                        })}
                    </ul>
                </div>
                <div className="column2">
                    <ul>
                        <h5>Company</h5>
                        {company.map((p) => {
                            return <li>
                                {p}
                            </li>
                        })}
                    </ul>
                </div>
                <div className="column2">
                    <ul>
                        <h5>Directoies</h5>
                        {directoies.map((p) => {
                            return <li>
                                {p}
                            </li>
                        })}
                        <h5>Design Assets</h5>
                        {designAssets.map((p) => {
                            return <li>
                                {p}
                            </li>
                        })}
                    </ul>
                </div>
                <div className="column2">
                    <ul>
                        <h5>Design Resources</h5>
                        {designResources.map((p) => {
                            return <li>
                                {p}
                            </li>
                        })}

                    </ul>
                </div>
            </div>
            <div className='footer_line'>
                <span></span>
                <div className="copyRights">
                    <p><LiaCopyrightSolid style={{ position: "relative", top: "2px" }} /> 2023 Dribbble. All rights reserved.</p>
                    <p><h5 style={{ display: "inline" }}>20,501,853</h5> shots dribbbled <TbBrandDribbbleFilled style={{ color: "#ea4b8b", position: "relative", top: "2px" }} /></p>
                </div>

            </div>

        </div>


    );
}

export default Footer;
