import React from 'react'
import '../../Styles/Brands.scss'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import ARB from '../../Assets/arb.png'
import makino from '../../Assets/makino.PNG'
import heroParts from '../../Assets/heroparts.PNG'
import lumax from '../../Assets/lumax.PNG'
import Gulf from '../../Assets/Gulf_logo.png'
import Rockman from '../../Assets/rockman.png'
import varroc from '../../Assets/varroc.PNG'
import endurance from '../../Assets/endurance.PNG'
import castrol from '../../Assets/castrol.PNG'
import servo from '../../Assets/servo.png'
import usha from '../../Assets/usha.png'
import unominda from '../../Assets/unominda.PNG'
import tvs from '../../Assets/tvsparts.PNG'
import mrf from '../../Assets/mrf.png'
import mk from '../../Assets/mk.PNG'
import bosch from '../../Assets/Bosch.PNG'
import bajaj from '../../Assets/bajajparts.PNG'
import ask from '../../Assets/ask.PNG'
import tvseuro from '../../Assets/tvseuro.png'
import ceat from '../../Assets/ceat.png'
import swiss from '../../Assets/swiss.webp'
import steelbird from '../../Assets/steelbird.png'
import rolon from '../../Assets/rolan.PNG';
import goetze from '../../Assets/goetze.png';

const Brands = () => {
    return (
        <>
            <Nav />
            <div className='all_brands'>
                <div className='container'>
                    <h3 className='mt-2'>Major Brands</h3>
                    <div className="row justify-content-center">
                        <div className="brandCard ">
                            <img width='180px' src={ARB} alt="arb" />
                        </div>
                        <div className="brandCard ">
                            <img width='130px' src={makino} alt="makino" />
                        </div>
                        <div className="brandCard ">
                            <img width='190px' src={heroParts} alt='hero' />
                        </div>
                        <div className="brandCard ">
                            <img width='190px' src={lumax} alt='lumax' />
                        </div>
                        <div className="brandCard ">
                            <img width='110px' src={Gulf} alt='gulf' />
                        </div>
                        <div className="brandCard ">
                            <img width='160px' src={Rockman} alt='rockman' />
                        </div>
                        <div className="brandCard ">
                        <img width='120px' src={varroc} alt='varroc'/>
                        </div>
                        <div className="brandCard ">
                        <img width='210px' src={endurance} alt='endurance'/>
                        </div>
                        <div className="brandCard ">
                        <img width='170px' src={castrol} alt='castrol'/>
                        </div>
                        <div className="brandCard ">
                        <img width='170px' src={unominda} alt='unominda'/>
                        </div>
                        <div className="brandCard ">
                        <img width='170px' src={tvs} alt='tvs'/>
                        </div>
                        <div className="brandCard ">
                        <img width='110px' src={bajaj} alt='bajaj'/>
                        </div>
                        <div className="brandCard ">
                        <img width='170px' src={bosch} alt='bosch'/>
                        </div>
                        <div className="brandCard ">
                        <img width='170px' src={servo} alt='servo'/>
                        </div>
                        <div className="brandCard ">
                        <img width='170px' src={usha} alt='usha'/>
                        </div>
                        <div className="brandCard ">
                        <img width='150px' src={mrf} alt='mrf'/>
                        </div>
                        <div className="brandCard ">
                        <img width='170px' src={mk} alt='mk'/>
                        </div>
                        <div className="brandCard ">
                        <img width='70px' src={ask} alt='ask'/>
                        </div>
                        <div className="brandCard ">
                        <img width='240px' src={tvseuro} alt='tvseuro'/>
                        </div>
                        <div className="brandCard ">
                        <img width='150px' src={ceat} alt='ceat'/>
                        </div>
                        <div className="brandCard ">
                        <img width='170px' src={swiss} alt='swiss'/>
                        </div>
                        <div className="brandCard ">
                        <img width='120px' src={steelbird} alt='steelbird'/>
                        </div>
                        <div className="brandCard ">
                        <img width='210px' src={rolon} alt='rolon'/>
                        </div>
                        <div className="brandCard ">
                        <img width='170px' src={goetze} alt='goetze'/>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />

        </>

    )
}

export default Brands