import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// Swiper JS MODULE
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Alex',
    review:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia vitae provident fugit sequi consectetur, nulla inventore cumque velit accusantium pariatur qui aperiam? Aut dicta saepe suscipit, tempora voluptates maiores eos.',
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Martin',
    review:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia vitae provident fugit sequi consectetur, nulla inventore cumque velit accusantium pariatur qui aperiam? Aut dicta saepe suscipit, tempora voluptates maiores eos.',
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Kevin',
    review:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia vitae provident fugit sequi consectetur, nulla inventore cumque velit accusantium pariatur qui aperiam? Aut dicta saepe suscipit, tempora voluptates maiores eos.',
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Fenil',
    review:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia vitae provident fugit sequi consectetur, nulla inventore cumque velit accusantium pariatur qui aperiam? Aut dicta saepe suscipit, tempora voluptates maiores eos.',
  },
];

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {data &&
          data.map(({ id, avatar, name, review }) => {
            return (
              <SwiperSlide className='testimonial mySwiper' key={id}>
                <div className='client__avatar'>
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'> {name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};
