import React from 'react'
import './Section1.css';
import Carousel from 'react-bootstrap/Carousel';

const Section1 = () => {
    return (
        <div className='section'>
            <div className='left-section'>
                <h3>Yes, We Went There</h3>
                <h1>Wellness Trends 2024</h1>
                <p>We asked the experts, dug into the data, and scoured the market to identify the top 10 wellness trends that will streamline and elevate our lives in the year ahead—all for the benefit of our bodies and minds.</p>
                <button type="button">Read More</button>
            </div>
            <div className='right-section'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Section1;