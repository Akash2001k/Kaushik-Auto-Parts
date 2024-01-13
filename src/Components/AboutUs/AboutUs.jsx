import React from 'react'
import kap from '../../Assets/kap.PNG'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import '../../Styles/About.scss'
import { Link } from 'react-router-dom'
import quality from '../../Assets/quality.png'
import uniqeness from '../../Assets/uniqeness.PNG'
import all from '../../Assets/all.PNG'


const AboutUs = () => {
    return (
        <>
            <Nav />
            <div className='aboutus'>

                <div className='Abotdiv'>
                    <h3>About Us</h3>

                    <h4 className='mt-3'>Welcome to Kaushik Auto Parts</h4>
                    <h5 className='my-4'>YOUR STORE FOR AUTO PARTS, ACCESSORIES AND SERVICES</h5>
                    <div className='mt-4'>
                        <h5>OUR MISSION : </h5>
                        <p><strong>Kaushik Auto Parts</strong> serve as the portal under the parent company Anay Autoparts Retails Private Limited. We strive to provide our customer with high quality service by delivering genuine spare parts for motorcycle, scooter, scooty.</p>
                    </div>

                    <div className='mt-3'>
                        <h5>OUR VALUES : </h5>
                        <p>We value top quality service and product delivery and will that you have an amazing online experince with us.</p>
                    </div>
                    <div className='mt-3'>
                        <h5>CONTACT US : </h5>
                        <Link to='contactus'> Click for Contact Us </Link>
                    </div>
                </div>
                <div className='imgDiv'>
                    <img src={kap} alt="" />
                </div>

                
            </div>
            <div className='aboutIcons'>
                     <div>
                        <img className='mt-2' src={quality} alt=''/>
                        <p>Quality</p>
                     </div>
                     <div>
                        <img  src={uniqeness} alt=''/>
                        <p>Uniqeness</p>
                     </div>
                     <div>
                        <img className='mt-2' src={all} alt=''/>
                        <p>Completed</p>
                     </div>
                </div>
            <Footer />
        </>

    )
}

export default AboutUs