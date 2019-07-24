import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl}) => {
  return (
    <div className='menu-item' style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;