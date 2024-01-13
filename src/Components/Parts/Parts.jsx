import React from 'react'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import ClutchBrake from './ClutchBrake'
import EngineElectrical from './EngineElectrical'
import BodyParts from './BodyParts'
import OtherParts from './otherParts'

const Parts = () => {
    return (
        <>
            <Nav />
            <div >
                <ClutchBrake/>
                <EngineElectrical/>
                <BodyParts/>
                <OtherParts/>
            </div>
            <Footer />
        </>
    )
}

export default Parts