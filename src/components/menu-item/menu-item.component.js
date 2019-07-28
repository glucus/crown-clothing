import React from 'react';
import {withRouter} from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, history, linkUrl}) => {
  return (
    <div className={`${size} menu-item`}
         onClick={() => {
           console.log(title, 'history', history);
           history.push(`/${linkUrl}`)
         }}>
      <div className='menu-item-background' style={{
        backgroundImage: `url(${imageUrl})`
      }}/>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);