import React from 'react'
import '../../Styles/Parts.scss'
import carburettor from '../../Assets/carburettor.avif'
import PistonKit from '../../Assets/Piston-Kit.avif'
import speedometer from '../../Assets/speedometer.avif'
import connectingRod from '../../Assets/connecting-rod.avif'
import cyKit from '../../Assets/cylinder-kit.avif'
import RR from '../../Assets/rr-unit.avif'
import FuelPumpA from '../../Assets/fuel-pump-assly.avif'
import fuelInj from '../../Assets/fuel-inj.avif'
import BCU from '../../Assets/BCU.avif'
import CDI from '../../Assets/cdi.avif'
import ssMoter from '../../Assets/starter-motor.avif'
import coilPlate from '../../Assets/coil-plate.avif'
import lockSet from '../../Assets/lockset.avif'
import crankShaft from '../../Assets/crankshaft.avif'
import fuelPumpMotor from '../../Assets/fuel-pump-motor.avif'
import wiring from '../../Assets/wiring.jpg'


const EngineElectrical = () => {
  return (
    <div  className='parts'>
    <div className='container '>
        <h4>Engine & Electical</h4>
        <div className='part_cards'>
            <div>
                <img src={carburettor} alt='carburettor' />
                <p >Carburettor</p>
            </div>
            <div>
                <img src={PistonKit} alt='Piston Kit' />
                <p >Piston Kit</p>
            </div>
            <div>
                <img src={connectingRod} alt='Connecting Rod' />
                <p >Connecting Rod</p>
            </div>
            <div>
                <img src={RR} alt='RR Unit' />
                <p>RR Unit</p>
            </div>
            <div>
                <img src={cyKit} alt='Cylinder Kit' />
                <p>Cylinder Kit</p>
            </div>
            <div>
                <img src={speedometer} alt='speedometer' />
                <p>Speedometer</p>
            </div>
            <div>
                <img src={FuelPumpA} alt='Fuel-Pump-Assembly' />
                <p>Fuel Pump Assembly</p>
            </div>
            <div>
                <img src={fuelInj} alt='Fuel-Injector' />
                <p>Fuel Injector</p>
            </div>
            <div>
                <img src={BCU} alt='BCU' />
                <p>Body Control Unit</p>
            </div>
            <div>
                <img src={CDI} alt='CDI' />
                <p>CDI</p>
            </div>
            <div>
                <img src={ssMoter} alt='Self Start Moter' />
                <p>Self Starter Motor</p>
            </div>
            <div>
                <img src={coilPlate} alt='coil-plate' />
                <p>Magnet Coil</p>
            </div>
            <div>
                <img src={lockSet} alt='Lock Set' />
                <p>Lock Set | Ignition Switch</p>
            </div>
            <div>
                <img src={crankShaft} alt='crank-shaft' />
                <p>Crank Shaft</p>
            </div>
            <div>
                <img src={fuelPumpMotor} alt='fuel Pump Motor' />
                <p>Fuel Pump Motor</p>
            </div>
            <div>
                <img style={{width:"160px",height:"160px"}} src={wiring} alt='wiring' />
                <p>Wiring</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default EngineElectrical