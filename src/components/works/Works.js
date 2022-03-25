import { useState } from 'react';

import { workData } from 'data';
import './works.scss';

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < workData.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className='works' id='works'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {workData.map((item) => {
          const { id, img, desc, icon, title } = item;
          return (
            <div key={id} className='container'>
              <div className='item'>
                <div className='left'>
                  <div className='left__container'>
                    <div className='img__container'>
                      <img src={icon} alt={title} />
                    </div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className='right'>
                  <img src={img} alt={title} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src='assets/arrow.png'
        alt='left arrow'
        className='arrow left'
        onClick={() => handleClick('left')}
      />
      <img
        src='assets/arrow.png'
        alt='right arrow'
        className='arrow right'
        onClick={() => handleClick('right')}
      />
    </div>
  );
};

export default Works;
