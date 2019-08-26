// import { combineReducer } from 'redux';
import { Type } from '../GameAction';
import generateCards from '../../utils/generateCards';

const initialState = {
  step: 20,
  overturn: [],
  cards: generateCards(),
  id: '',
  disabled: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.SHOT:
      if (state.step === 0) {
        alert('Game Over! Try again');
        return { ...state, step: 30, overturn: [], disabled: false };
      }
      //   const cardClick = state.cards.find(card => card.id);
      //   console.log(cardClick.id);
      //   console.log(action.id);
      return {
        ...state,
        step: state.step - 1,
        id: state.id,
        overturn: [...state.overturn, state.id],
        disabled: (state.disabled: true),
      };
    default:
      return state;
  }
};

export default gameReducer;
