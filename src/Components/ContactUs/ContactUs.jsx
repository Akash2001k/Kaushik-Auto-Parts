import React, { useState } from 'react'
import '../../Styles/Contact.scss'
import location from '../../Assets/location.PNG'
import phone from '../../Assets/phone.PNG'
import email from '../../Assets/email-icon.PNG'
import Nav from '../Layout/Nav'
import {GoogleMap, useLoadScript,MarkerF } from '@react-google-maps/api'

const ContactUs = () => {

    // const [selectedLocation, setSelectedLocation] = useState({
    //     lat: 28.7041,
    //     lng: 77.1025
    // })

    // const {isLoaded, loadError} = useLoadScript({
    //     googleMapsApiKey:"134dcdscuej"
    // })

    // const mapRef = React.useRef()

    // const onMapLoad = React.useCallback((map)=>{
    //     mapRef.current = map
    // },[])

    // if(loadError) return "Error"
    // if(isLoaded) return "Maps"
    return (
        <>
            <Nav />
            <div>
                <div class="contactUs" >

                    <div class="container">
                        <div class="contact_div" data-aos="fade-right" >
                            <div>
                                <img style={{ width: "100px" }} src={location} />
                                <p style={{ fontSize: "18px" }}>Rampark Ext, Loni, Ghaziabad, 201102, Uttar Pradesh</p>
                            </div>
                            <div>
                                <img style={{ width: "100px" }} src={phone} />
                                <p style={{ fontSize: "18px" }}>Whatsapp - +91 9015083407</p>
                                <p style={{ fontSize: "18px", marginTop: "-12px" }}>Call - +91 9811330945</p>
                            </div>
                            <div>
                                <img style={{ width: "100px" }} src={email} />
                                <p style={{ fontSize: "18px" }}>info@kaushikautoparts.com</p>
                            </div>


                        </div>
                        <div class="form_div" data-aos="fade-left" >
                            <h4>Contact Us</h4>
                            <form>

                                <div>
                                    <label>Name</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input type="email" name="" id="" />
                                </div>
                                <div>
                                    <label>Mobile No.</label>
                                    <input type="number" name="" id="" />
                                </div>
                                <div>
                                    <label>Description</label>
                                    <textarea type="number" name="" id=""></textarea>
                                </div>
                                <button className='btn btn-primary w-100 mt-3' type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div >
                <GoogleMap mapContainerStyle={{height:"600px"}} center={selectedLocation} zoom={15} onLoad={onMapLoad}>
                </GoogleMap>
            </div> */}

        </>
    )
}

export default ContactUs