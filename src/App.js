import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Board from './components/Board/Board';
import * as gameActions from './redux/GameAction';
import './App.css';

function App({
  cards,
  step,
  showCards,
  handleClick,
  isModal,
  isWin,
  resetGame,
}) {
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
              <h1>Congratulations!!! You win</h1>
              <div>
                <button
                  className="start-button"
                  type="button"
                  onClick={resetGame}
                >
                  Try Once more ?
                </button>
              </div>
            </div>
          )}
        </header>
      ) : (
        <div>
          <h1>Game Over</h1>
          <div>
            <button className="reset-button" type="button" onClick={resetGame}>
              You must win!
            </button>
          </div>
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
  resetGame: PropTypes.func.isRequired,
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
  resetGame: () => dispatch(gameActions.resetGame()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
