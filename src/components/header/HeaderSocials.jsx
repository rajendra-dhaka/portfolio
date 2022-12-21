import React from "react";
import {BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/rajendra-dhaka-60a3ab182/' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/rajendra-dhaka' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://twitter.com/Rajendra__Dhaka' target='_blank'>
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
