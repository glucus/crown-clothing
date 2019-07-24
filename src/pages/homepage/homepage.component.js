import React from 'react';
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
          category =>
            <div key={category.id} className='menu-item'>
              <div className='content'>
                <h1 className='title'>Hats</h1>
                <span className='subtitle'>Shop now</span>
              </div>
            </div>
        )}
      </div>
    </div>
  )
};

export default Homepage;