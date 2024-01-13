import React from 'react'
import '../../Styles/Parts.scss'
import petrolTank from '../../Assets/PetrolTank.avif'
import tankCover from '../../Assets/tankCover.webp'
import TPFC from '../../Assets/TPFC.avif'
import visor from '../../Assets/visor.avif'
import sidePanel from '../../Assets/sidePanel.avif'
import silencer from '../../Assets/silencer.avif'
import headLight from '../../Assets/headlight.avif'
import mudguard from '../../Assets/mudguard.webp'
import chainCover from '../../Assets/chainCover.jpg'

const BodyParts = () => {
  return (
    <div  className='parts'>
    <div className='container '>
        <h4>Bike Body Parts</h4>
        <div className='part_cards'>
            <div>
                <img src={petrolTank} alt='petrolTank' />
                <p >Petrol Tank</p>
            </div>
            <div>
                <img style={{height:"160px"}} src={tankCover} alt='tank-Cover' />
                <p >Tank Cover</p>
            </div>
            <div>
                <img src={TPFC} alt='TPFC' />
                <p >TPFC</p>
            </div>
            <div>
                <img src={visor} alt='visor' />
                <p>Visor</p>
            </div>
            <div>
                <img src={sidePanel} alt='Side Panel' />
                <p>Side Panel</p>
            </div>
            <div>
                <img style={{height:"160px"}} src={mudguard} alt='Mudguard' />
                <p>Mudguard</p>
            </div>
            <div>
                <img src={silencer} alt='Silencer' />
                <p>Silencer</p>
            </div>
            <div>
                <img src={headLight} alt='head Light' />
                <p>Head Light</p>
            </div>
            <div>
                <img src={chainCover} alt='chainCover' />
                <p>Chain Cover</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default BodyParts