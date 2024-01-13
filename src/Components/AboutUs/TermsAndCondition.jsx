import React from 'react'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import '../../Styles/About.scss'
import { Link } from 'react-router-dom'
import quality from '../../Assets/quality.png'
import uniqeness from '../../Assets/uniqeness.PNG'
import all from '../../Assets/all.PNG'

const TermsAndCondition = () => {
  return (
    <>
     <Nav />
            <div className='aboutus'>

                <div className='Abotdiv'>
                    <h3>Terms and Conditions</h3>
                    <p><strong>1.</strong> Replacement will be accepted only in cases when the product does not fit your bike/scooty or wrong product was sold to you. </p>
                    <p><strong>2.</strong> Change of mind after purchased of the product from Kaushik Auto Parts or by customer will not be considered a valid reason for replacing a product.</p>
                    <p><strong>3.</strong> In cases where an incorrect product was ordered by the customer,handling charges will be deducted.</p>
                    <p><strong>4.</strong> Any replacement request has to be raised within <strong>7 days</strong> of purchasing the product.</p>
                    <p><strong>5.</strong> The product will be checked properly before sell. Damage Product will not replaceable</p>
                    <p><strong>6.</strong> If any rare product does not available, You can ordered to us but you have to pay <strong>50% ammount</strong> of that product to us</p>
                    
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

export default TermsAndCondition