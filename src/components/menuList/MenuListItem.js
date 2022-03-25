import './menuListItem.scss';

const MenuListItem = ({ url, text, onToggle }) => {
  return (
    <li className='list__item' onClick={onToggle}>
      <a href={`#${url}`} className='list__item--link'>
        {text}
      </a>
    </li>
  );
};

export default MenuListItem;
