import React, { useState, useEffect } from 'react'
import '../../Styles/Nav.scss'
import brand from '../../Assets/logo with name.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from "react-router-dom";

const Nav = () => {

    const [isOn, setIsOn] = useState(false);


    const toggleSlider = () => {
        let navlist = document.getElementById('navlist')
        let slider = document.getElementById('slider')
        setIsOn(!isOn);
        { isOn ? slider.style.width = "350px" : slider.style.width = "0px" }
    }
    useEffect(() => {
        toggleSlider();
    }, []);

    return (
        <div>
            <nav id="nav" className="navbar navbar-expand-lg p-0 fixed-top">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="/">
                        <img width='180px' src={brand} alt='brand' />
                    </a>
                    <GiHamburgerMenu onClick={toggleSlider} />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/parts">Parts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/contactus">Contact Us</Link>
                            </li>
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    About
                                </a>
                                <div id='dropd' class="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to="/aboutus">About Us</Link>
                                    <Link class="dropdown-item" to="/privacypolicy">Privacy Policy</Link>
                                    <Link class="dropdown-item" to="/returnpolicy">Return Policy</Link>
                                    <Link class="dropdown-item" to="/termandconditions">Terms and Conditions</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/brands">Major Brands</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            {/* ======================== Slider =================================== */}

            <div id="slider" className='MenuSlider'>
                <ul id='navlist' className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                        <Link className="nav-link active text-white" aria-current="page" to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-white" aria-current="page" to="/parts">Parts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-white" aria-current="page" to="/contactus">Contact Us</Link>
                    </li>
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            About
                        </a>
                        <div id='dropd' class="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                            <Link class="dropdown-item" to="/aboutus">About Us</Link>
                            <Link class="dropdown-item" to="/privacypolicy">Privacy Policy</Link>
                            <Link class="dropdown-item" to="/returnpolicy">Return Policy</Link>
                            <Link class="dropdown-item" to="/termandconditions">Terms and Conditions</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-white" aria-current="page" to="/brands">Major Brands</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav