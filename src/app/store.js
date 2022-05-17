import { configureStore } from '@reduxjs/toolkit';
import albumSlice from '../features/Albums/reducers/albumSlice';
import commentSlice from '../features/Comments/reducers/commentSlice';
import postSlice from '../features/Posts/reducers/postSlice';

export default configureStore({
  reducer: {
    album: albumSlice,
    comment: commentSlice,
    post: postSlice,
  },
});
