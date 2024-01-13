import React from 'react'
import Nav from '../Layout/Nav'
import Carousel from './Carousel'
import BikeBrands from './BikeBrands'
import Founder from './Founder'
import Footer from '../Layout/Footer'
import PopularBrands from './PopularBrands'
import Dashboard from './Dashboard'

const Main = () => {
    return (
        <>
            <Nav />
            <Carousel />
            <BikeBrands/>
            <Founder/>
            <PopularBrands/>
            <Dashboard/>
            <Footer/>
        </>

    )
}

export default Main