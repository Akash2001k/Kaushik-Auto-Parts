import React from 'react'
import '../../Styles/Dashboard.scss'
import { BsBarChartFill,BsFillBoxFill } from 'react-icons/bs';
import { RiEBikeFill } from 'react-icons/ri';
import { motion } from 'framer-motion'

const Dashboard = () => {
  return (
    <div className='Dashboard'>
        <div className='container'>
            <motion.div initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}} className='text-center'>
                <h1>452</h1>
                <BsBarChartFill/>
                <p>Total Bike Brands</p>
            </motion.div>
            <motion.div initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}} className='text-center'>
                <h1>382</h1>
                <BsFillBoxFill/>
                <p>Total Parts Category</p>
            </motion.div>
            <motion.div initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}} className='text-center'>
                <h1>83</h1>
                <RiEBikeFill/>
                <p>Parts by No. of Vehicles</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Dashboard