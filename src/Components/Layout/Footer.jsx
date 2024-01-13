import React from 'react'
import '../../Styles/Footer.scss'
import founder from '../../Assets/founder.jpg'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='list_div'>
                <div className='single_list'>
                    <strong>ABOUT US</strong>
                    <div className='mt-2'>
                        <ul>
                            <li>About us</li>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>Return Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
                <div className='single_list'>
                    <strong>SPARE CATEGORY</strong>
                    <div className='mt-2'>
                        <ul>
                            <li>Brake Parts</li>
                            <li>Bike Body Parts</li>
                            <li>Electric & Control System</li>
                            <li>Engine Parts & Fuel System</li>
                            <li>Transmission Parts</li>
                            <li>Engine Oils</li>
                            <li>Suspension</li>
                        </ul>
                    </div>
                </div>
                <div className='single_list'>
                    <strong>REWARDS & BENEFITS</strong>
                    <div className='mt-2'>
                        <ul>
                            <li>Rewards & Benefits</li>
                        </ul>
                    </div>
                </div>
                <div className='single_list'>
                    <strong>SPARE BY BIKE BRAND</strong>
                    <div className='mt-2'>
                        <ul>
                            <li>Bajaj</li>
                            <li>Hero</li>
                            <li>Honda</li>
                            <li>TVS</li>
                            <li>Suzuki</li>
                            <li>Yamaha</li>
                            <li>Mahindra</li>
                            <li>KTM</li>
                            <li>Royal Enfield</li>
                            <li>Kawasaki</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr style={{ color: "white" }} />
            <div className='social_div'>
                
                <div className='mt-4'>
                    <strong className='mx-4 mt-3'>FOLLOW US</strong>
                    <div className='founder_soc mt-2'>
                        <AiFillInstagram style={{ fontSize: "36px", cursor: "pointer" }} />
                        <BsFacebook style={{ fontSize: "32px", margin: "2px 20px", cursor: "pointer" }} />
                        <AiFillLinkedin style={{ fontSize: "32px", margin: "2px", cursor: "pointer" }} />
                    </div>
                </div>
                <div className='mt-4'>
                    <strong className=' mt-2'>ANDROID APP</strong><br />
                    <a>INSTALL NOW</a>
                </div>
                <p className='mt-4'>Copyrite © 2023 kaushikautoparts.com</p>
            </div>
        </div>
    )
}

export default Footer