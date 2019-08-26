import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as gameActions from '../../redux/GameAction';
import './style.css';

function Card({ handleClick, id, overturn, type, height, width, disabled }) {
  console.log(id);
  return (
    <>
      <div
        className={`flip-container ${overturn ? 'flipped' : ''}`}
        style={{ width, height }}
        onClick={() => /*disabled ? null : */ handleClick(id)}
      >
        <div className="flipper">
          <img
            id={id}
            style={{ height, width }}
            className={overturn ? 'front' : 'back'}
            src={overturn ? `/img/${type}.png` : `/img/logo192.png`}
            alt="pic"
          />
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  //   step: PropTypes.number.isRequired,
  //   overturn: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

// const mapStateToProps = state => ({
//   step: state.step,
//   overturn: state.overturn,
// });
// const mapDispatchToProps = dispatch => ({
//   handleClick: () => dispatch(gameActions.shot(1)),
// });

export default connect()(Card);
/* mapStateToProps,
  mapDispatchToProps, */
