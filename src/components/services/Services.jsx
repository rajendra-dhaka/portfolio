import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Intutive interfaces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Focus on the experiences of end users.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Clean & Crispy design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Latest premium themes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Professional business websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Portfolios and more...</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>All devices Responsive websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cutting Edge websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Blazing fast speed.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SEO enriched websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Specialized in building dashboards.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>PWA Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>App like interface.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Highly Responsive.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Re-engaging.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Push Notifications enabled.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Access to device Native features.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Connectivity Independent like native apps.</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  );
};
