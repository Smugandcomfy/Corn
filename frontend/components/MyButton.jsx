import React from 'react';
import PropTypes from 'prop-types';
import './ComponentStyles/MyButton.css';

const MyButton = ({ href, text, iconSrc, iconWidth, iconHeight, color, backgroundColor, hoverColor, font, fontWeight, fontSize }) => {
  const buttonStyle = {
    color: color,
    backgroundColor: backgroundColor, // Default background color
    '--hover-color': hoverColor, // Custom property for hover state
    fontFamily: font,
    fontWeight: fontWeight,
    fontSize: fontSize,
  };

  const iconStyle = {
    width: iconWidth, // Use iconWidth prop
    height: iconHeight, // Use iconHeight prop
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="custom-button" style={buttonStyle}>
      {text}
      {iconSrc && <img src={iconSrc} alt="" className="button-icon" style={iconStyle} />}
    </a>
  );
};

MyButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  iconSrc: PropTypes.string,
  iconWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Allow string or number
  iconHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Allow string or number
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverColor: PropTypes.string,
  font: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Allow string or number
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Allow string or number
};

export default MyButton;

