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
      console.log(state.nick1);
      console.log(state.nick2);
      if (state.step === 0) {
        return {
          cards: generateCards(),
          step: 20,
          nick1: null,
          nick2: null,
          round: 1,
          isModal: true,
          isWin: false,
        };
      }
      let newState = { round: state.round + 1, step: state.step - 1 };

      if (state.round % 2 === 1) {
        let cardClicked = state.cards.find(card => {
          return card.id === action.id;
        });
        Object.assign(newState, {
          nick1: cardClicked.idx,
          nick2: null,
          cards: state.cards.map(card => {
            return card.id === action.id || card.rival === true
              ? Object.assign({}, card, { overturn: true })
              : Object.assign({}, card, { overturn: false });
          }),
        });
      } else {
        let cardClicked = state.cards.find(card => {
          return card.id === action.id;
        });
        if (cardClicked.idx === state.nick1) {
          Object.assign(newState, {
            nick1: state.nick1,
            nick2: cardClicked.idx,
            cards: state.cards.map(card => {
              return card.id === action.id || card.idx === state.nick1
                ? Object.assign({}, card, { overturn: true, rival: true })
                : card;
            }),
          });
        } else {
          Object.assign(newState, {
            nick1: state.nick1,
            nick2: cardClicked.rel,
            cards: state.cards.map(card => {
              return card.id === action.id
                ? Object.assign({}, card, { overturn: true })
                : card;
            }),
          });
        }
      }
      if (
        Object.keys({
          ...state.cards.filter(card => card.overturn === true),
        }).length === 11
      ) {
        return {
          ...state,
          isWin: true,
        };
      }

      return newState;

    default:
      return state;
  }
};

export default gameReducer;
