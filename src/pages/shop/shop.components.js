import React, {Component} from 'react';
import SHOP_DATA from './shop.data'

class ShopPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div>
        <h1>SHOP PAGE</h1>
        <button onClick={() => this.props.history.push('/')}>
          To home page
        </button>
      </div>
    );
  }
}

export default ShopPage;