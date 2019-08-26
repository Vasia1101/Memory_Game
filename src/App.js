import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Board from './components/board/Board';
import * as gameActions from './redux/GameAction';
import './App.css';

function App({ cards, step, handleClick, overturn, id, disabled }) {
  // console.log(cards, disabled, id);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Memory Game by Vasil Haida for Kodekeeper</h2>
        <Board
          cards={cards}
          step={step}
          handleClick={handleClick}
          overturn={overturn}
          id={id}
          disabled={disabled}
        />
      </header>
    </div>
  );
}

App.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  step: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  overturn: PropTypes.arrayOf(PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  cards: state.cards,
  step: state.step,
  overturn: state.overturn,
  id: state.id,
  disabled: state.disabled,
});
const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(gameActions.shot(1)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
