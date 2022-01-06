import * as types from './actionTypes';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: types.FETCH_POSTS,
        payload: posts
      })
    );
};


export const CreatePosts = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  }).then(res => res.json())
    .then(post => {
      dispatch({
        type: types.NEW_POST,
        payload: post
      })
    })
};



export const fetchPostsByID = PostID => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + PostID)
    .then(res => res.json())
    .then(post => {
      dispatch({
        type: types.FETCH_POSTS_BYID,
        payload: post
      })
    }
    );
};


export const DeleteByPostID = PostID => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + PostID, {
    method: 'DELETE'
  }).then(res => res.json())
    .then(post => {
      dispatch({
        type: types.DELETE_POSTS,
        payload: post
      })
    }
    )
};