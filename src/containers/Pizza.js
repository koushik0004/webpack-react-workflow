import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PizzaImage from '../components/PizzaImage/PizzaImage';

class Pizza extends Component{
  render() {
    console.log(this.props);
    return (
      <div>
        <PizzaImage />
      </div>
    );
  }
}

export default withRouter(Pizza);