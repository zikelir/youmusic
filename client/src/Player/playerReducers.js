const initialState = {
  player: null
}

const playerReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_PLAYER':
      return action.player;
      break;
    default:
      return state;
  }
};

export default playerReducer;