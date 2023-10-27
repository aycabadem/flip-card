import React from "react";
import { useState, useRef } from "react";
import { Word } from "./Words";
import { useDispatch } from "react-redux";
import { firestore } from "../firebaseSetup";
import { deleteWord } from "../redux/wordsSlice";

const WordListItem = (props: { index: number; word: Word }) => {
  const inputRefPt = useRef<HTMLInputElement | null>(null);
  const inputRefEn = useRef<HTMLInputElement | null>(null);

  //   inputRefEn.current!.value = props.word.english;
  //   inputRefPt.current!.value = props.word.english;

  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const deleteData = async (word: Word) => {
    await firestore.collection("words").doc(word.id).delete();
  };
  return (
    <div
      style={{
        display: "flex",
        marginRight: "500px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      key={props.index}
    >
      <div>
        <input
          type="text"
          defaultValue={props.word.portuguese}
          ref={inputRefPt}
          readOnly={!edit}
          style={{
            border: edit ? undefined : "0",
            outline: edit ? undefined : "0",
          }}
        />
      </div>
      <div>
        <input
          type="text"
          defaultValue={props.word.english}
          ref={inputRefEn}
          readOnly={!edit}
          style={{
            border: edit ? undefined : "0",
            outline: edit ? undefined : "0",
          }}
        />
      </div>
      <div style={{ justifyContent: "left" }}>
        <button
          style={{ visibility: edit ? "hidden" : "visible" }}
          onClick={() => {
            setEdit((edit) => !edit);
          }}
        >
          edit
        </button>{" "}
        <button
          style={{
            visibility: !edit ? "hidden" : "visible",
          }}
          onClick={() => {
            setEdit((edit) => !edit);
            inputRefEn.current!.value = props.word.english;
            inputRefPt.current!.value = props.word.portuguese;
          }}
        >
          cancel
        </button>
        <button
          style={{ visibility: !edit ? "hidden" : "visible" }}
          onClick={async () => {
            setEdit((edit) => !edit);
            console.log(inputRefEn.current!.value);

            await firestore
              .collection("words")
              .doc(props.word.id)
              .update({
                ...props.word,
                english: inputRefEn.current!.value,
                portuguese: inputRefPt.current!.value,
              });
          }}
        >
          save
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            deleteData(props.word);
            dispatch(deleteWord(props.index));
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default WordListItem;
