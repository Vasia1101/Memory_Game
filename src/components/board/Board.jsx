import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/Card';

function Board({ cards, step, handleClick, overturn, id, disabled }) {
  console.log(cards.id);
  return (
    <div>
      <h3>You have {step} shots</h3>
      {cards.map(card => (
        <Card
          key={card.index}
          id={card.id}
          width={100}
          height={100}
          type={card.type}
          disabled={disabled}
          //   handleClick={() => (disabled ? null : handleClick((card.id = id)))}
          overturn={overturn.includes(id)}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Board;
