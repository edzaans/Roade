import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAILURE,
  POSTS_CREATE_REQUEST,
  POSTS_CREATE_SUCCESS,
  POSTS_CREATE_FAILURE,
  POSTS_DELETE_REQUEST,
  POSTS_DELETE_SUCCESS,
  POSTS_DELETE_FAILURE,
  POSTS_UPDATE_REQUEST,
  POSTS_UPDATE_SUCCESS,
  POSTS_UPDATE_FAILURE,
} from "../constants/postsConstants";

// Function to list all posts by person logged in
export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    // Loads all POSTS
    case POSTS_LIST_REQUEST:
      return { loading: true };
    // Checks if post was retreived
    case POSTS_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    // Checks if there were any errors
    case POSTS_LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Function to create note with logged in Details

export const postCreateReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    // Creates post
    case POSTS_CREATE_REQUEST:
      return { loading: true };
    // Checks if post was created
    case POSTS_CREATE_SUCCESS:
      return { loading: false, posts: true };
    // Checks if there were any errors
    case POSTS_CREATE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case POSTS_DELETE_REQUEST:
      return { loading: true };
    case POSTS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case POSTS_DELETE_FAILURE:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const postUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case POSTS_UPDATE_REQUEST:
      return { loading: true };
    case POSTS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case POSTS_UPDATE_FAILURE:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
