import React from 'react'
import '../../Styles/Carousel.scss'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item carousel-img bg-img-1 active ">
                        <div className="carousel-caption ">
                            <h4 className='mb-4'>Quality Products</h4>
                            <p className='mb-5'>There are 100+ popular companies products available here, We have quality product if you even do not trust on us yet you can visit our bussiness. We Provide World's best product</p>
                            <button className='btn btn-primary my-3'>Explore Now</button>
                        </div>
                    </div>
                    <div className="carousel-item carousel-img bg-img-2">
                        <div className="carousel-caption ">
                            <h4 className='mb-4'>A to Z Products</h4>
                            <p className='mb-5'>There is all prodocts of all bikes are available here, You do not need to go anywhere because of we are providing you worlds best.<br/> Almost 2 decade of our service of selling auto parts </p>
                            <button className='btn btn-primary my-3'>Explore Now</button>
                        </div>
                    </div>
                    <div className="carousel-item carousel-img bg-img-3 ">
                        <div className="carousel-caption ">
                            <h4 className='mb-4'>All Products of Every Model of bike</h4>
                            <p className='mb-5'>There are 100+ popular companies products available here, We have quality product if you even do not trust on us yet you can visit our bussiness</p>
                            <button className='btn btn-primary my-3'>Explore Now</button>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel