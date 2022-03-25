import { Mail, Person } from '@material-ui/icons';
import './navbar.scss';

const Navbar = ({ menuOpen, onToggle }) => {
  return (
    <div className={`navbar ${menuOpen && 'active'}`}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            genius.
          </a>
          <div className='item-container'>
            <Person className='icon' />
            <span>+44 924 12 74</span>
            <div className='item-container'>
              <Mail className='icon' />
              <span>jdoe@example.com</span>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={onToggle}>
            <span className='line--1'></span>
            <span className='line--2'></span>
            <span className='line--3'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
