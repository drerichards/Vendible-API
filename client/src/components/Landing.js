import React from 'react'
import './css/Landing.css'
// import LoginModal from './Login_Modal'
// import Modal from './Modal'
import clothes from '../images/clothes.jpeg'
import elec from '../images/elec.jpeg'
import home from '../images/home.jpg'

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
                                    <img className="d-block w-100 carousel-img" src={clothes} alt="Clothing" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>All the best brands</h1>
                                        <h3>All in one place!</h3>
                                        <button type="button" className="btn btn-primary">
                                            <a href="/departments">Shop Now!</a>
                                        </button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 carousel-img" src={elec} alt="Electronics" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>More stores. More value.</h1>
                                        <h3>More of what you want!</h3>
                                        <button type="button" className="btn btn-primary">
                                            <a href="/departments">Shop Now!</a>
                                        </button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 carousel-img" src={home} alt="Furniture" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>Whatever you’ve got in mind</h1>
                                        <h3>We’ve got inside!</h3>
                                        <button type="button" className="btn btn-primary">
                                            <a href="/departments">Shop Now!</a>
                                        </button>
                                    </div>
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
