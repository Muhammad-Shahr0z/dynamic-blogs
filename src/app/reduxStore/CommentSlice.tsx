
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
    id: number;
    text: string;
    blogId: string;  // to associate comment with specific blog
  }
  
  interface CommentState {
    comments: Comment[];
  }
  

  const initialState: CommentState = {
    comments: []
  };
  
  const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
      addComment: (state, action: PayloadAction<Comment>) => {
        state.comments.push(action.payload);
      },
      deleteComment: (state, action: PayloadAction<number>) => {
        state.comments = state.comments.filter(comment => comment.id !== action.payload);

      }
    }
  });
  
  export const { addComment, deleteComment } = commentSlice.actions;
  
  export default commentSlice.reducer;
  