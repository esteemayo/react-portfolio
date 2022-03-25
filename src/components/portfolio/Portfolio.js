import { useEffect, useState } from 'react';

import {
  lists,
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
} from 'data';
import PortfolioList from 'components/portfolioList/PortfolioList';

import './portfolio.scss';

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState('featured');

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'design':
        setData(designPortfolio);
        break;
      case 'branding':
        setData(contentPortfolio);
        break;

      default:
        break;
    }
  }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul className='list'>
        {lists.map((item) => {
          return (
            <PortfolioList
              key={item.id}
              {...item}
              active={selected === item.id}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
      <div className='container'>
        {data.map((item) => {
          const { id, img, title } = item;
          return (
            <div key={id} className='item'>
              <img src={img} alt={title} />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
