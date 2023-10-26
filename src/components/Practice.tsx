import React, { useEffect, useState } from "react";
import FlippableCard from "./flippable-card";
import { firestore } from "../firebaseSetup";
import { Word } from "./Words";
import { useDispatch, useSelector } from "react-redux";
import { setWords } from "../redux/wordsSlice";
import { RootState } from "../redux/store";

const Practice = () => {
  const dispatch = useDispatch();
  const words = useSelector((state: RootState) => state.wordReducer.words);
  const [index, setIndex] = useState(0);

  const getData = async () => {
    const snapshot = await firestore.collection("words").get();
    const data: Array<Word> = [];

    snapshot.docs.map((doc) => {
      console.log(doc.id);
      data.push({
        id: doc.id,
        ...(doc.data() as Word), // the remaining fields
      });
    });

    dispatch(setWords(data));

    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        marginLeft: "20rem",
        marginRight: "20rem",
        justifyContent: "space-around",
        display: "flex",
        alignItems: "center",
        height: "85vh",
      }}
    >
      <button
        style={{
          width: "90px",
          height: "40px",
          fontSize: "18px",
        }}
        onClick={() => {
          setIndex((index) => (index - 1 < 0 ? words.length - 1 : index - 1));
        }}
      >
        Back
      </button>
      <FlippableCard
        english={words[index]?.english}
        portuguese={words[index]?.portuguese}
      />
      <button
        style={{
          width: "90px",
          height: "40px",
          fontSize: "18px",
        }}
        onClick={() => {
          setIndex((index) => (index + 1 >= words.length ? 0 : index + 1));
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Practice;
