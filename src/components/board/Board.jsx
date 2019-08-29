import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/Card';

function Board({ cards, step, handleClick, idx, overturn }) {
  return (
    <div>
      <h3>You have {step} shots</h3>
      {cards.map(card => (
        <Card
          key={card.index}
          id={card.id}
          width={100}
          height={100}
          idx={card.idx}
          overturn={card.overturn}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  step: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Board;
