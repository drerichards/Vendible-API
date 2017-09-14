import React from 'react'
import './css/Landing.css'
// import LoginModal from './Login_Modal'
// import Modal from './Modal'

const Landing = () => {
    return (
        <div>
            <main role="main">
                <header role="banner">
                    <div className="container">
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to="0"
                                    className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        className="d-block w-100 carousel-img"
                                        src="https://images.pexels.com/photos/296881/pexels-photo-296881.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
                                        alt="Clothing"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>All the best brands</h1>
                                        <h3>All in one place!</h3>
                                        <button type="button" className="btn btn-primary">
                                            <a href="/departments">Shop Now!</a>
                                        </button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100 carousel-img"
                                        src="https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
                                        alt="Electronics"/>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100 carousel-img"
                                        src="https://images.pexels.com/photos/2459/stairs-home-loft-lifestyle.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
                                        alt="Furniture"/>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </header>
            </main>

        </div>
    )
}
export default Landing
