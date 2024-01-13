import React from 'react'
import '../../Styles/Parts.scss'
import brakeDiscCal from '../../Assets/brake-disc-caliper.avif'
import brakeDiscPlate from '../../Assets/brake-disc-plate.avif'
import brakeDrum from '../../Assets/brake-drum.avif'
import frotnBrakeMaster from '../../Assets/frotn-brake-master.avif'
import clutchPlates from '../../Assets/clutch-plates.webp'
import clutch1way from '../../Assets/clutch-1-way.avif'
import clutchAssembly from '../../Assets/clutch-assembly.avif'
import clutchPulley from '../../Assets/clutch-pulley.avif'
import clutchShoe from '../../Assets/clutch-shoe.webp'
import brakeShoe from '../../Assets/brakeShoe.jpg'


const ClutchBrake = () => {
  return (
    <div  className='parts' style={{paddingTop:"100px",paddingBottom:"20px"}}>
    <div className='container'>
        <h4>Brake & Clutch</h4>
        <div className='part_cards'>
            <div>
                <img src={brakeDiscCal} alt='brake-disc-caliper' />
                <p >Brake Disc Caliper</p>
            </div>
            <div>
                <img src={brakeDiscPlate} alt='brake-disc-plate' />
                <p >Brake Disc Plate</p>
            </div>
            <div>
                <img src={frotnBrakeMaster} alt='frotn-brake-master' />
                <p >Brake Disc Master Assy.</p>
            </div>
            <div>
                <img src={brakeDrum} alt='brake-drum' />
                <p>Brake Drum</p>
            </div>
            <div>
                <img src={clutchPlates} alt='clutch-plates' />
                <p>Clutch Plates</p>
            </div>
            <div>
                <img src={clutch1way} alt='clutch-1-way' />
                <p>One Way Clutch</p>
            </div>
            <div>
                <img src={clutchAssembly} alt='clutch Assembly' />
                <p>Clutch Assembly</p>
            </div>
            <div>
                <img src={clutchPulley} alt='clutch-Pulley' />
                <p>Clutch Pulley</p>
            </div>
            <div>
                <img src={brakeShoe} alt='brake-Shoe' />
                <p>Brake Shoe</p>
            </div>
            <div>
                <img src={clutchShoe} alt='clutch-Shoe' />
                <p>Clutch Shoe</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default ClutchBrake