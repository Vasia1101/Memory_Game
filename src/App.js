import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Board from './components/board/Board';
import * as gameActions from './redux/GameAction';
import './App.css';

function App({ cards, step, showCards, handleClick, isModal, isWin }) {
  return (
    <div className="App">
      {!isModal ? (
        <header className="App-header">
          <h2>Memory Game by Vasil Haida for Keplercode</h2>
          {cards.length === 0 ? (
            <button className="start-button" type="button" onClick={showCards}>
              Start
            </button>
          ) : null}
          {!isWin ? (
            <Board cards={cards} step={step} handleClick={handleClick} />
          ) : (
            <div>
              <h1>Congratulations!!! You win</h1>{' '}
            </div>
          )}
        </header>
      ) : (
        <div>
          <h1>Game Over</h1>
        </div>
      )}
    </div>
  );
}

App.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  step: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  showCards: PropTypes.func.isRequired,
  isWin: PropTypes.bool.isRequired,
  isModal: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  cards: state.cards,
  step: state.step,
  isModal: state.isModal,
  isWin: state.isWin,
});

const mapDispatchToProps = dispatch => ({
  showCards: () => dispatch(gameActions.startGame()),
  handleClick: (idx, id) => dispatch(gameActions.overturnCard(idx, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
