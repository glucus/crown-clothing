import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component'

import './homepage.styles.scss'

const menuCategories = [
  {id: 0, title: 'Hats', displaySize: 'small'},
  {id: 1, title: 'Jackets', displaySize: 'small'},
  {id: 2, title: 'Sneakers', displaySize: 'small'},
  {id: 3, title: 'Womens', displaySize: 'large'},
  {id: 4, title: 'Mens', displaySize: 'large'},
];

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        {menuCategories && menuCategories.map(
          category => <MenuItem key={category.id} title={category.title} />
        )}
      </div>
    </div>
  )
};

export default Homepage;