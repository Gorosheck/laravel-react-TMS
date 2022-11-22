import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
   status: 'idle',
   entities: [],
   error: null,
};

// export const fetchArticles = async (dispatch) => {
//    try {
//       dispatch(loading());

//       dispatch(loaded(response.data));
//    } catch (e) {
//       dispatch(failed(e));
//    }
// };

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
   const url = `${process.env.REACT_APP_API_URL}/api/articles`;
   const response = await axios.get(url);

   return response.data;
});

const articlesSlice = createSlice({
   name: 'articles',
   initialState,
   reducers: {
      loading: (state, action) => {
         state.status = 'loading';
      },
      loaded: (state, action) => {
         state.status = 'loaded';
         state.entities = action.payload.data;
      },
      failed: (state, action) => {
         state.status = 'failed';
         state.error = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchArticles.pending, (state, action) => {
            state.status = 'loading';
         })
         .addCase(fetchArticles.fulfilled, (state, action) => {
            state.status = 'loaded';
            state.entities = action.payload.data;
         })
         .addCase(fetchArticles.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
         });
   },
});

const { actions, reducer } = articlesSlice;

export default reducer;

export const { loading, loaded, failed } = actions;

export const getAllArticles = state => state.articles;

