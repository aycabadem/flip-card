import React, { useEffect, useState } from "react";
import FlippableCard from "./flippable-card";
import { firestore } from "../firebaseSetup";
import { Word } from "./Words";

const Practice = () => {
  const [words, setWords] = useState<Array<Word>>([]);
  const [index, setIndex] = useState(0);

  const getData = async () => {
    const snapshot = await firestore.collection("words").get();
    const data: Array<Word> = [];

    snapshot.docs.map((doc) => {
      data.push({
        ...(doc.data() as Word), // the remaining fields
      });
    });

    setWords(data);

    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
      }}
    >
      <FlippableCard
        english={words[index]?.english}
        portuguese={words[index]?.portuguese}
      />
      <button
        onClick={() => {
          setIndex((index) => (index + 1 >= words.length ? 0 : index + 1));
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          setIndex((index) => (index - 1 < 0 ? words.length - 1 : index - 1));
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Practice;
