import React from 'react';
import MenuItem from '../menu-item/menu-item.component'

import {sections} from './directory.data'
import './directory.styles.scss'

class Directory extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sections: sections
    };
  }

  render(props) {

    const {sections} = this.state;

    return (
      <div className='directory-menu'>
        {sections.map(
          ({title, imageUrl, id, size, linkUrl}) => (
            <MenuItem key={id}
                      title={title}
                      imageUrl={imageUrl}
                      size={size}
                      linkUrl={linkUrl}
            />
          )
        )}
      </div>
    );
  }
}

export default Directory;