import React from 'react'
import '../../Styles/PopularBrands.scss'
import ARB from '../../Assets/arb.png'
import makino from '../../Assets/makino.PNG'
import heroParts from '../../Assets/heroparts.PNG'
import lumax from '../../Assets/lumax.PNG'
import Gulf from '../../Assets/Gulf_logo.png'
import Rockman from '../../Assets/rockman.png'
import varroc from '../../Assets/varroc.PNG'
import endurance from '../../Assets/endurance.PNG'
import castrol from '../../Assets/castrol.PNG'
// import rolon from '../../Assetcd s/rolan.PNG';s
import { AiOutlineArrowRight } from 'react-icons/ai';
// import { motion } from 'framer-motion's
import {Link} from 'react-router-dom'

const PopularBrands = () => {
  return (
    <div initial={{x:"100%",opacity:0}} whileInView={{x:0,opacity:1}}>
        <div className='PopularBrands'>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                <h5>Popular Brands</h5>
                <Link className='view_all_button' style={{color:"#214066"}} to='/brands'>View more<AiOutlineArrowRight/></Link>
                </div>
                
                <div className='brand_cards'>
                    <div className='img_div'>
                        <img style={{width:"200px",marginTop:"3px"}} src={ARB} alt='ARB' />
                    </div>
                    <div className='img_div'>
                        <img  src={Rockman} alt='Rockaman' />
                    </div>
                    <div className='img_div'>
                        <img style={{width:"150px"}} src={varroc} alt='Varroc' />
                    </div>
                    <div className='img_div'>
                        <img style={{width:"150px",marginTop:"3px"}} src={makino} alt='makino' />
                    </div>
                    <div className='img_div'>
                        <img style={{width:"200px",marginTop:"3px"}} src={heroParts} alt='Hero' />
                    </div>
                    <div className='img_div'>
                        <img style={{width:"210px"}} src={lumax} alt='Lumax' />
                    </div>
                    <div className='img_div'>
                        {/* <img style={{width:"240px",marginTop:"38px"}} src={rolon} alt='Rolon' /> */}
                    </div>
                    <div className='img_div'> 
                        <img style={{width:"140px",marginTop:"3px"}} src={Gulf} alt='Gulf' />
                    </div>
                    <div className='img_div'>
                        <img style={{width:"240px",marginTop:"16px"}} src={endurance} alt='Endurance' />
                    </div>
                    <div className='img_div'>
                        <img style={{width:"200px",marginTop:"36px"}} src={castrol} alt='Castrol' />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopularBrands