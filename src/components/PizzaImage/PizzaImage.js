import React from 'react';
import classes from './PizzaImage.css';
import PizzaImg from '../../assets/new-piza.jpeg';

const PizzaImage = (props) => (
  <div classname={classes.PizzaImage}>
    <img src={PizzaImg} className={classes.PizzaImg} />
  </div>
);

export default PizzaImage;