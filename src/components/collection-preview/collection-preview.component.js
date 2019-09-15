import React from 'react';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => {

  const previewItems = items.slice(0, 4);

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {previewItems.map(
          item => <div key={item.id} className='item-preview'>
            {item.name}
            <img src={item.imageUrl} alt={item.name} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionPreview;