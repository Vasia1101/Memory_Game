import generateCards from '../utils/generateCards';

export const Type = {
  START_GAME: 'SART_GAME',
  OVERTURN_CARD: 'OVERTURN_CARD',
  CHECK_CARDS: 'CHECK_CARDS',
  RESET_GAME: 'RESET_GAME',
  MACH_CARDS: 'MACH_CARDS',
};

export const startGame = () => {
  const cards = generateCards();
  return {
    type: Type.START_GAME,
    cards,
  };
};
export const overturnCard = (idx, id) => dispatch => {
  dispatch({
    type: Type.OVERTURN_CARD,
    idx,
    id,
  });

  dispatch({
    type: Type.MACH_CARDS,
    idx,
    id,
  });
};

export const resetGame = () => {
  return {
    type: Type.RESET_GAME,
  };
};
