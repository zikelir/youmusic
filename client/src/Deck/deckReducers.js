import { handlePlay } from './deckActions';

const deckReducers = (state = isPlaying.IS_PLAYING, action) => {
  switch (action.type) {
    case 'HANDLE_PLAY':
      return action.isPlaying
    default:
      return state
  }
}

export default deckReducers;