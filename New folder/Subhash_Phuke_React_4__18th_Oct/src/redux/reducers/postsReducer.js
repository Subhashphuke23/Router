const initialState = {
    items: [],
    loading: false,
  };
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_POSTS_SUCCESS':
        return { ...state, items: action.payload, loading: false };
      case 'FETCH_POSTS_FAILURE':
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default postsReducer;
  