import React from 'react';
import './ActionButton.scss';

const ActionButton = ({ icon, text, size, onClick, iconStyle }) => {
  return (
    <div className="buttonContainer">
      <button
        style={{ width: `${size}px`, height: `${size}px` }}
        onClick={onClick}
        className="btn"
      >
        <img src={icon} alt="" className="icon" style={iconStyle} />
      </button>
      <span>{text.toUpperCase()}</span>
    </div>
  );
};

export default ActionButton;
