import { menuLinks } from 'data';
import MenuListItem from '../menuList/MenuListItem';

import './menu.scss';

const Menu = ({ menuOpen, onToggle }) => {
  return (
    <div className={`menu ${menuOpen && 'active'}`}>
      <ul className='list'>
        {menuLinks.map((item) => {
          const { id } = item;
          return <MenuListItem key={id} {...item} onToggle={onToggle} />;
        })}
      </ul>
    </div>
  );
};

export default Menu;
