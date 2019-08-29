import { Type } from '../GameAction';
import generateCards from '../../utils/generateCards';

const initialState = {
  cards: [],
  step: 20,
  nick1: null,
  nick2: null,
  round: 1,
  isModal: false,
  isWin: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.START_GAME:
      return {
        ...state,
        cards: [...action.cards],
      };
    case Type.OVERTURN_CARD:
      if (state.step === 0) {
        return {
          ...state,
          isModal: true,
        };
      }
      let newState = { round: state.round + 1, step: state.step - 1 };

      if (state.round % 2 === 1) {
        let getCurrentCard;
        const flipedCard = state.cards.map(card => {
          if (card.id === action.id) {
            return {
              ...card,
              overturn: !card.overturn,
            };
          } else {
            return card;
          }
        });
        return {
          ...state,
          nick1: action.id,
          ...newState,
          cards: flipedCard,
        };
      } else {
        const flipedCard = state.cards.map(card => {
          if (card.id === action.id) {
            return {
              ...card,
              overturn: !card.overturn,
            };
          } else {
            return card;
          }
        });
        return {
          ...state,
          ...newState,
          cards: flipedCard,
        };
      }

    // if (state.round % 2 === 1) {
    //   let cardClicked = state.cards.find(card => {
    //     return card.id === action.id;
    //   });
    //   Object.assign(newState, {
    //     nick1: cardClicked.idx,
    //     nick2: null,
    //     cards: state.cards.map(card => {
    //       return card.id === action.id || card.rival === true
    //         ? Object.assign({}, card, { overturn: true })
    //         : Object.assign({}, card, { overturn: false });
    //     }),
    //   });
    // } else {
    //   let cardClicked = state.cards.find(card => {
    //     return card.id === action.id;
    //   });
    //   if (cardClicked.idx === state.nick1) {
    //     Object.assign(newState, {
    //       nick1: state.nick1,
    //       nick2: cardClicked.idx,
    //       cards: state.cards.map(card => {
    //         return card.id === action.id || card.idx === state.nick1
    //           ? Object.assign({}, card, { overturn: true, rival: true })
    //           : card;
    //       }),
    //     });
    //   } else {
    //     Object.assign(newState, {
    //       nick1: state.nick1,
    //       nick2: cardClicked.rel,
    //       cards: state.cards.map(card => {
    //         return card.id === action.id
    //           ? Object.assign({}, card, { overturn: true })
    //           : card;
    //       }),
    //     });
    //   }
    // }
    // if (
    //   Object.keys({
    //     ...state.cards.filter(card => card.overturn === true),
    //   }).length === 11
    // ) {
    //   return {
    //     ...state,
    //     isWin: true,
    //   };
    // }
    case Type.MACH_CARDS: {
      if (state.round % 2 !== 1) {
        const notRivalCard = state.cards.filter(card => {
          if (card.rival !== true) {
            return card;
          }
        });
        const cardFirst = notRivalCard.find(card => (card.id = state.nick1));
        const cardSecond = notRivalCard.find(card => (card.id = action.id));
        console.log({ notRivalCard });
        if (cardFirst.idx === cardSecond.idx) {
          return {
            ...state,
            cards: [
              ...state.cards.map(card => {
                if (card.id === cardFirst.id) {
                  return {
                    ...card,
                    rival: true,
                  };
                } else if (card.id === cardSecond.id) {
                  return {
                    ...card,
                    rival: true,
                  };
                } else {
                  return { ...card, overturn: false };
                }
              }),
            ],
          };
        }
      } else {
        return state;
      }
    }
    case Type.RESET_GAME:
      return {
        cards: generateCards(),
        step: 20,
        nick1: null,
        nick2: null,
        round: 1,
        isModal: false,
        isWin: false,
      };
    default:
      return state;
  }
};

export default gameReducer;
