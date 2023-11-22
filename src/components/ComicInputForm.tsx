import React, { useState } from "react";
import fetchComics from "../hooks/fetch_comics";
import ComicInput from "./ComicInput";

const ComicInputForm = (props: any): JSX.Element => {
  const [inputFields, setInputFields] = useState<Array<string>>([]);
  const [comicStrips, setComicStrips] = useState<Blob[]>([]);

  const addInputField = () => {
    if (inputFields.length === 10) {
      return;
    }

    setInputFields([...inputFields, ""]);
  };

  const generateComics = () => {
    inputFields.forEach((field) => {
      console.log(field);
      fetchComics({ inputs: field }).then((response) => {
        setComicStrips([...comicStrips, response]);
      });
    });
  };

  return (
    <div>
      {inputFields.map((inputField, idx) => (
        <div key={idx}>
          <ComicInput
            changeValue={(newValue: string) => {
              inputFields[idx] = newValue;
              setInputFields([...inputFields]);
            }}
          ></ComicInput>
        </div>
      ))}
      <button onClick={addInputField}>Add</button>
      <button onClick={generateComics}>Generate</button>
      <div>
        {comicStrips.map((comicStrip, idx) => {
          return (
            <img
              key={idx}
              alt="comic_pane"
              src={URL.createObjectURL(comicStrip)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ComicInputForm;
