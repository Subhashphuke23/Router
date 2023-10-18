export const fetchPostsRequest = () => ({
    type: 'FETCH_POSTS_REQUEST',
  });
  
  export const fetchPostsSuccess = (posts) => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload: posts,
  });
  
  export const fetchPostsFailure = () => ({
    type: 'FETCH_POSTS_FAILURE',
  });
  
  export const fetchPosts = () => {
    return async (dispatch) => {
      dispatch(fetchPostsRequest());
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        // Add imgSrc to each post
        const postsWithImgSrc = data.map((post) => ({
          ...post,
          imgSrc: `https://picsum.photos/200?random=${post.id}`,
        }));
        dispatch(fetchPostsSuccess(postsWithImgSrc));
      } catch (error) {
        console.error('Error fetching posts:', error);
        dispatch(fetchPostsFailure());
      }
    };
  };
    