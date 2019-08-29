import generateCards from '../utils/generateCards';

export const Type = {
  START_GAME: 'SART_GAME',
  OVERTURN_CARD: 'OVERTURN_CARD',
  CHECK_CARDS: 'CHECK_CARDS',
  RESET_GAME: 'RESET_GAME',
};

export const startGame = () => {
  const cards = generateCards();
  return {
    type: Type.START_GAME,
    cards,
  };
};
export const overturnCard = (idx, id) => {
  return {
    type: Type.OVERTURN_CARD,
    idx,
    id,
  };
};

export const resetGame = () => {
  return {
    type: Type.RESET_GAME,
  };
};
