import React from 'react';
import './Hero.css';
const Hero = () => {
    return (
        <div className='banner'>
            <img src="https://images.unsplash.com/photo-1483137140003-ae073b395549?q
            =80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b
            y1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner_image" />
            <div className='banner-text'>
                <div className='banner-content'>
                    <h1>Living Well: Gut Check</h1>
                    <p>Our digestive systems are undeniably complex. While the path to good gut health may look a little different for everyone, it doesn’t *have* to be so complicated.</p>
                    <button type="button">View More</button>

                </div>
            </div>
        </div>
    )
}

export default Hero;