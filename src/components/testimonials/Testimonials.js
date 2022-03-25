import { testimonials } from 'data';
import './testimonials.scss';

const Testimonials = () => {
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className='container'>
        {testimonials.map((item) => {
          const { id, img, desc, icon, name, title, featured } = item;
          return (
            <div key={id} className={` ${featured ? 'card featured' : 'card'}`}>
              <div className='top'>
                <img
                  className='left'
                  src='assets/right-arrow.png'
                  alt=' arrow icon'
                />
                <img className='user' src={img} alt={name} />
                <img className='right' src={icon} alt='icon' />
              </div>
              <div className='center'>{desc}</div>
              <div className='bottom'>
                <h3>{name}</h3>
                <h4>{title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
