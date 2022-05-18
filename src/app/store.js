import { configureStore } from '@reduxjs/toolkit';
import photoSlice from '../features/Albums/Photo/reducers/photoSlice';
import albumSlice from '../features/Albums/reducers/albumSlice';
import commentSlice from '../features/Comments/reducers/commentSlice';
import postSlice from '../features/Posts/reducers/postSlice';

export default configureStore({
  reducer: {
    album: albumSlice,
    photo: photoSlice,
    comment: commentSlice,
    post: postSlice,
  },
});
