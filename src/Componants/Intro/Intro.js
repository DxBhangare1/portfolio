import React from 'react';
import './Intro.css';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introtext'>I'm<span className='IntroName'>DX Bhangare</span></span>
                <p className='introPara'>I am a Full stack Developer developer</p>
                <button className='btn'>Hire me</button>
            </div>
        </section>
    );
}
export default Intro;
