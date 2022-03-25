import './portfolioList.scss';

const PortfolioList = ({ id, title, active, setSelected }) => {
  return (
    <>
      <li
        key={id}
        className={`list__item ${active && 'list__item--active'}`}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </>
  );
};

export default PortfolioList;
