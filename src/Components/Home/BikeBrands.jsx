import React from 'react';
import '../../Styles/BikeBrands.scss'
import hero from '../../Assets/hero.png'
import Bajaj from '../../Assets/bajaj.png'
import tvs from '../../Assets/tvs.png'
import suzuki from '../../Assets/suzuki.png'
import mahindra from '../../Assets/mahindra.png'
import honda from '../../Assets/honda.png'
import yamaha from '../../Assets/yamaha.png'
import royalEnfield from '../../Assets/royal enfield.png'
import ktm from '../../Assets/ktm.png'
import kawasaki from '../../Assets/kawasaki.png'


const BikeBrands = () => {
    return (
        <div  className='BikeBrands'>
            <div className='container'>
                <h4>We Provide you all the Parts Of these Brands</h4>
                <div className='bike_cards'>
                    <div>
                        <img src={hero} alt='Hero' />
                    </div>
                    <div>
                        <img src={Bajaj} alt='Bajaj' />
                    </div>
                    <div>
                        <img src={tvs} alt='Tvs' />
                    </div>
                    <div>
                        <img src={suzuki} alt='Suzuki' />
                    </div>
                    <div>
                        <img src={mahindra} alt='Mahindra' />
                    </div>
                    <div>
                        <img src={honda} alt='Honda' />
                    </div>
                    <div>
                        <img src={yamaha} alt='Yamaha' />
                    </div>
                    <div>
                        <img src={royalEnfield} alt='Royal Enfield' />
                    </div>
                    <div>
                        <img src={ktm} alt='KTM' />
                    </div>
                    <div>
                        <img src={kawasaki} alt='Kawasaki' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BikeBrands