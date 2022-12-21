import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import './header.css';
import { Typewriter } from 'react-simple-typewriter';

export const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Rajendra Dhaka</h1>
        <h5 className='text-light'>
          <Typewriter
            words={['Frontend Developer', 'Aspiring to be Fullstack', 'Thank You for Visit !']}
            loop
            cursor
            cursorStyle='😀'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};
