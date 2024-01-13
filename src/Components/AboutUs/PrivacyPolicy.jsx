import React from 'react'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import '../../Styles/About.scss'
import { Link } from 'react-router-dom'
import quality from '../../Assets/quality.png'
import uniqeness from '../../Assets/uniqeness.PNG'
import all from '../../Assets/all.PNG'


const PrivacyPolicy = () => {
  return (
    
    <>
            <Nav />
            <div className='aboutus'>

                <div className='Abotdiv'>
                    <h3>Privacy policy</h3>
                    <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from Kaushik Auto Parts.</p>
                     <div className='mt-3'>
                    <h5>Personal information we collect </h5>
                    <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.</p>
                    <p>We collect Device Information using the following technologies: - “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit - “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps. - “Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site.</p>
                    <p>Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, payment wallet information), email address, and phone number. We refer to this information as “Information”. When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and other Information.</p>
                    </div>

                    <div className='mt-3'>
                    <h5>How do we use your personal information?</h5>
                    <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/ confirmations). Additionally, we use this Information to: - Communicate with you; - Screen our orders for potential risk or fraud; and - When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</p>
                    </div>

                    <div className='mt-3'>
                    <h5>Sharing you personal Information</h5>
                    <p> We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information. We also use Google Analytics to help us understand how our customers use the Site -- you can read more about how Google uses your Personal Information. You can also opt-out of Google Analytics Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
                    </div>

                    <div className='mt-3'>
                    <h5>Behavioural advertising</h5>
                    <p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising</p>
                    <p> If you would like to exercise this right, please contact us through the contact information below. Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States. Data retention When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information. Changes We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons. Contact us For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at info@kaushikautoparts.com </p>
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

export default PrivacyPolicy