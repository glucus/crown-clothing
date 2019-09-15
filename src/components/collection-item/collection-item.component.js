import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({name, imageUrl}) => {

  return (
    <div className='item-preview'>
      <img src={imageUrl} alt={name}/>
      {name}
    </div>
  );
};

export default CollectionItem;