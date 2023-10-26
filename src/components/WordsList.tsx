import { useSelector } from "react-redux";

import { RootState } from "../redux/store";

import WordListItem from "./WordListItem";

const WordsList = () => {
  const words = useSelector((state: RootState) => state.wordReducer.words);

  return (
    <div>
      {words.map((word, index) => (
        <WordListItem index={index} word={word} />
      ))}
    </div>
  );
};

export default WordsList;
