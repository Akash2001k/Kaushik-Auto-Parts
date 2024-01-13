import React from 'react'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import '../../Styles/About.scss'
import { Link } from 'react-router-dom'
import quality from '../../Assets/quality.png'
import uniqeness from '../../Assets/uniqeness.PNG'
import all from '../../Assets/all.PNG'

const ReturnPolicy = () => {
  return (
    <>
     <Nav />
            <div className='aboutus'>

                <div className='Abotdiv'>
                    <h3>Return policy</h3>
                    <p>We accept replace not return.<br/> We always aim to make sure our customers love our products, The sold product will not be reutrn only can be replace only</p>

                    <div>
                     <h5>Returns Procedure</h5>
                     <p><strong>1.</strong> Please make sure the product first.</p>
                     <p><strong>2.</strong> Sometimes, You have to carry your old product to match new one (In case of rare product).</p>
                     <p><strong>3.</strong> The product will not be return only can be replace.</p>
                     <p><strong>4.</strong> The seal of a product should not be opened if seal is opened, product even not be replaceable </p>
                     <p><strong>Address</strong><br/>Landmark - Siddh baba Mandir, Rampark Ext, Loni, Ghaziabad, 201102, Uttar Pradesh</p>
                     </div>

                    <div className='mt-3'>
                        <h5>CONTACT US : </h5>
                        <Link to='contactus'> Click for Contact Us </Link>
                    </div>
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

export default ReturnPolicy