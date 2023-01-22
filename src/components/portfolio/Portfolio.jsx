import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The T-Shirt Store',
    github: 'https://github.com/rajendra-dhaka',
    demo: 'https://tee-shirt-store.netlify.app',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Tring Contact Book',
    github: 'https://github.com/rajendra-dhaka/Contact-Book',
    demo: 'https://tringbook.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Adminzz Dashboard',
    github: 'https://github.com/rajendra-dhaka/admin-dashboard',
    demo: 'https://adminzz.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'The T-Shirt Store',
    github: 'https://github.com/rajendra-dhaka',
    demo: 'https://tee-shirt-store.netlify.app',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Foodiez App',
    github: 'https://github.com/rajendra-dhaka',
    demo: 'https://foodiez-z.netlify.app',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Shopping Kart',
    github: 'https://github.com/rajendra-dhaka',
    demo: 'https://sshopping-kkart.netlify.app',
  },
];

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data &&
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article className='portfolio__item' key={id}>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>
                    Source Code
                  </a>
                  <a href={demo} className='btn btn-primary' target='_blank'>
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};
