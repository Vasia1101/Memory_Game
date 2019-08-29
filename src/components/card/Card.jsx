import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Card({ overturn, id, handleClick, idx, height, width }) {
  return (
    <>
      <div
        className={`flip-container ${overturn ? 'flipped' : ''}`}
        style={{ width, height }}
        onClick={() => {
          handleClick(idx, id);
        }}
      >
        <div className="flipper">
          <img
            id={id}
            style={{ height, width }}
            className={overturn ? 'front' : 'back'}
            src={overturn ? `/img/${idx}.png` : `/img/logo192.png`}
            alt="pic"
          />
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  idx: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  overturn: PropTypes.bool.isRequired,
};

export default Card;
