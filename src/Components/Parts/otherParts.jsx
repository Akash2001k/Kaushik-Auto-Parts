import React from 'react'
import '../../Styles/Parts.scss'
import shockAbsorber from '../../Assets/shockAbsorber.avif'
import ChainSproket from '../../Assets/ChainSproket.webp'
import frontFrokAsly from '../../Assets/frontFrokAsly.avif'
import forkLeg from '../../Assets/forkLeg.avif'
import forkPipe from '../../Assets/forkPipe.avif'
import tyre from '../../Assets/tyre.webp'
import wheelRim from '../../Assets/wheelRim.avif'
import Oils from '../../Assets/oils.JPG'
import frameBody from '../../Assets/frameBody.jpg'
import legGuard from '../../Assets/legguard.webp'

const OtherParts = () => {
  return (
    <div  className='parts'>
    <div className='container '>
        <h4>Other Parts</h4>
        <div className='part_cards'>
            <div>
                <img src={shockAbsorber} alt='Shock Absorber' />
                <p>Shock Absorber</p>
            </div>
            <div>
                <img style={{height:"160px"}} src={ChainSproket} alt='ChainSproket' />
                <p>Chain Sproket</p>
            </div>
            <div>
                <img src={frontFrokAsly} alt='frontFrokAsly' />
                <p >Front Frok Assembly</p>
            </div>
            <div>
                <img src={forkLeg} alt='Fork Leg Assembly' />
                <p>Fork Leg Assembly</p>
            </div>
            <div>
                <img src={forkPipe} alt='fork Pipe' />
                <p>Fork Pipe</p>
            </div>
            <div>
                <img style={{height:"160px"}} src={wheelRim} alt='Mudguard' />
                <p>Wheel Rim</p>
            </div>
            <div>
                <img  style={{width:"160px", height:"160px"}} src={tyre} alt='tyre' />
                <p>Tyre</p>
            </div>
            <div>
                <img  src={frameBody} alt='Oils' />
                <p>Frame Body</p>
            </div>
          
            <div>
                <img  src={legGuard} alt='legGuard' />
                <p>Leg Guard</p>
            </div>
            <div>
                <img  style={{width:"160px", height:"160px"}} src={Oils} alt='Oils' />
                <p>Engine Oils</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default OtherParts