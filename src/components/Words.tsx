import React, { useRef } from "react";

import { auth, firestore } from "../firebaseSetup";

const COLLECTION_NAME = "words";

// mapping the todo document
export type Word = {
  userId: string;
  english: string;
  portuguese: string;
};

const Words = () => {
  const ptRef = useRef<HTMLInputElement | null>(null);
  const engRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <label>Portuguese</label>
      <input ref={ptRef} id="portuguese" type="text" />
      <label>English</label>
      <input ref={engRef} id="english" type="text" />
      <button
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
        }}
      >
        Add
      </button>
    </>
  );
};

export default Words;
