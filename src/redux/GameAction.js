export const Type = {
  SHOT: 'SHOT',
  // CARDS: 'CARDS',
  //   OVERTURN_CARD: 'OVERTURN_CARD',
  // RESTART_GAME: 'RESTART_GAME',
};

export const shot = id => ({
  type: Type.SHOT,
  payload: id,
});

// export const getGard = () => ({
//   type: Type.CARDS,
// });
