import React, {Component} from 'react';
import SHOP_DATA from './shop.data'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {

    const {collections} = this.state;

    return (
      <div className='shop-page'>
        <h1>Collections</h1>
        {collections.map(
          ({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps} />
        )}
        <button onClick={() => this.props.history.push('/')}>
          To home page
        </button>
      </div>
    );
  }
}

export default ShopPage;