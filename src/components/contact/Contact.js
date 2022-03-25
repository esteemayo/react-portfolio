import { useState } from 'react';
import './contact.scss';

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    setTimeout(() => {
      setMessage(false);
    }, 5000);
  };

  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='icon' />
      </div>
      <div className='right'>
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
