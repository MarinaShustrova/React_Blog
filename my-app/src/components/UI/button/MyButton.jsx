/* eslint-disable react/prop-types */
import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, ...props}) => {
  return (
    // стиль как свойство объекта 
  <button { ...props} className={classes.myBtn}>
{children}
  </button>
  )
}

export default MyButton;
