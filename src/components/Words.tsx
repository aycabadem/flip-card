import React, { useRef } from "react";

import { auth, firestore } from "../firebaseSetup";
import WordsList from "./WordsList";
import { addWord } from "../redux/wordsSlice";
import { useDispatch } from "react-redux";

const COLLECTION_NAME = "words";

// mapping the todo document
export type Word = {
  userId: string;
  english: string;
  portuguese: string;
  id?: string;
};

const Words = () => {
  const ptRef = useRef<HTMLInputElement | null>(null);
  const engRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          display: "inline-block",
          margin: "20px",
        }}
      >
        <label style={{ fontSize: "18px", marginRight: "2px" }}>
          Portuguese
        </label>
        <input
          style={{ height: "25px", width: "120px" }}
          ref={ptRef}
          id="portuguese"
          type="text"
        />
        <label
          style={{ marginLeft: "40px", fontSize: "18px", marginRight: "2px" }}
        >
          English
        </label>
        <input
          style={{ height: "25px", width: "120px", fontSize: "18px" }}
          ref={engRef}
          id="english"
          type="text"
        />
        <button
          style={{
            marginLeft: "20px",
            width: "70px",
            height: "30px",
            fontSize: "16px",
          }}
          onClick={async () => {
            console.log(ptRef.current?.value);
            console.log(engRef.current?.value);
            const word: Word = {
              userId: auth.currentUser!.uid,
              english: engRef.current!.value,
              portuguese: ptRef.current!.value,
            };
            const response = await firestore
              .collection(COLLECTION_NAME)
              .add(word);
            console.log(response);
            ptRef.current!.value = "";
            engRef.current!.value = "";
            dispatch(addWord(word));
          }}
        >
          Add
        </button>
      </div>
      <div style={{}}>
        <WordsList />
      </div>
    </>
  );
};

export default Words;
