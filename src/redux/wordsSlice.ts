import { createSlice } from "@reduxjs/toolkit";
import { Word } from "../components/Words";
interface IWordsSlice {
  words: Array<Word>;
}
const initialState: IWordsSlice = {
  words: [],
};

export const wordsSlice = createSlice({
  name: "wordsSlice",

  initialState,
  reducers: {
    setWords: (state, action) => {
      state.words = action.payload;
    },
    addWord: (state, action) => {
      state.words = [...state.words, action.payload];
    },
    deleteWord: (state, action) => {
      state.words.splice(action.payload, 1);
    },
    editWord: (state, action) => {},
  },
});
export const { setWords, addWord, deleteWord } = wordsSlice.actions;
