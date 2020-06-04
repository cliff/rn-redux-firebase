const LIKE_NAME = 'LIKE_NAME';
const DISLIKE_NAME = 'DISLIKE_NAME';

const initialState = {
  likedNames: ["Peter", "John", "Fred", "Maria", "Helen", "Amy"],
  dislikedNames: ["Thomas"]
};

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_NAME: {
      return { ...state, likedNames: state.likedNames.concat(action.payload), dislikedNames: state.dislikedNames.filter( name => name != action.payload) }
    };
    case DISLIKE_NAME: {
      return { ...state, dislikedNames: state.dislikedNames.concat(action.payload), likedNames: state.likedNames.filter( name => name != action.payload)  }
    };
    default:
      return state;
  }
};

export default nameReducer;
