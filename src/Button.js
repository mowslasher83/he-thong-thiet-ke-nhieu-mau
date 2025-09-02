import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ color, children }) => {
  return (
    <button className={`btn btn-${color}`}>{children}</button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  color: 'default',
};

export default Button;