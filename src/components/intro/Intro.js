import { init } from 'ityped';
import { useEffect, useRef } from 'react';

import './intro.scss';

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', 'Content creator'],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='img__container'>
          <img src='assets/man.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi there, i'm</h2>
          <h1>John doe</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='' />
        </a>
      </div>
    </div>
  );
};

export default Intro;
