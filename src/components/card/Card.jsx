import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import img1 from '../../assets/img/1.png';
import img2 from '../../assets/img/2.png';
import img3 from '../../assets/img/3.png';
import img4 from '../../assets/img/4.png';
import img5 from '../../assets/img/5.png';
import img6 from '../../assets/img/6.png';
import imgback from '../../assets/img/back.png';

const images = [img1, img2, img3, img4, img5, img6];

function Card({ overturn, id, handleClick, idx, height, width }) {
  return (
    <>
      <div
        className={`flip-container ${overturn ? 'flipped' : ''}`}
        style={{ width, height }}
        onClick={
          overturn
            ? null
            : () => {
                handleClick(idx, id);
              }
        }
      >
        <div className="flipper">
          <img
            id={id}
            style={{ height, width }}
            className={overturn ? 'front' : 'back'}
            src={overturn ? images[idx - 1] : imgback}
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
