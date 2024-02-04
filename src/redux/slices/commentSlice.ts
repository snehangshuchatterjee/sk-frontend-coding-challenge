import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialComments from '../../assets/mockApi.json';

export interface commentType {
  commentId: number;
  parentId: number;
  level: number;
  userId: string;
  timestamp: string;
  commentText: string;
}

interface CommentStateType {
  comments: commentType[];
}

const initialState: CommentStateType = {
  comments: initialComments,
};

const commentSlice = createSlice({
  name: 'comments',
  initialState: initialState,
  reducers: {
    addComment: (state, { payload: comment }: PayloadAction<commentType>) => {
      state.comments.push(comment);
    },
  },
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
