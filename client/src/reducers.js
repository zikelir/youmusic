import { combineReducers } from 'redux';
// import { deckReducers } from './Deck/deckReducers';
import playerReducer from './Player/playerReducers.js';

const initialState = {
  player: null
}

export default combineReducers({
  // deckReducers,
  playerReducer
});