import React from 'react';
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

const menuItems = [
  {id: 0, title: 'Hats', displaySize: 'small'},
  {id: 1, title: 'Jackets', displaySize: 'small'},
  {id: 2, title: 'Sneakers', displaySize: 'small'},
  {id: 3, title: 'Womens', displaySize: 'large'},
  {id: 4, title: 'Mens', displaySize: 'large'},
];

const Directory = (props) => {
  return (
    <div className='directory-menu'>
      {menuItems && menuItems.map(
        item => <MenuItem key={item.id} title={item.title} />
      )}
    </div>
  );
};

export default Directory;