import React from 'react'
import '../../Styles/Founder.scss'
import founder from '../../Assets/founder.jpg'
import { AiFillInstagram,AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import {motion} from 'framer-motion'

const Founder = () => {
  return (
    <div className='founder' >
        <div className='container'>
            <motion.div className='founder_content' initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}}>
               <h2>Ajay Kaushik</h2>
               <span>Founder, CEO</span>
               <p className='mt-4'>Hello, This is Ajay Kaushik the founder of Kaushik Auto Parts, Almost 2 decade we served our customer. We Started our Bussiness on 13th November 2007, There is lot of Trust of our customer on us</p>
               <p>We always happy to serve you and we hope always give you our Best and will be as well in the future.</p>
               <span>Qualifications -</span>
               <p> BCA, MCA (KIET College Ghaziabad)</p>
               <div className='founder_soc'>
                  <AiFillInstagram style={{fontSize:"40px",cursor:"pointer"}}/>
                  <BsFacebook style={{fontSize:"35px",margin:"2px 30px",cursor:"pointer"}}/>
                  <AiFillLinkedin style={{fontSize:"35px",margin:"2px",cursor:"pointer"}}/>
               </div>
            </motion.div>
            <div className='d-flex justify-content-center imgdiv'>
                <motion.img initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}} src={founder} alt='Founder'/>
            </div>
        </div>
    </div>
  )
}

export default Founder