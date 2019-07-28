import React from 'react';
import {withRouter} from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, match, history, linkUrl}) => {
  return (
    <div className={`${size} menu-item`}
         onClick={() => {
           console.log(title, 'history', history);
           // console.log(title, 'match', match);
           history.push(`${match.url}${linkUrl}`)
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