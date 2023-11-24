import React, { ChangeEvent, useEffect, useState } from "react";
import ComicInput from "./ComicInput";

import "./comic_input_form.css";

const ComicInputForm = (props: any): JSX.Element => {
  const [inputFields, setInputFields] = useState<Array<string>>([]);

  const addInputField = () => {
    if (inputFields.length === 10) {
      props.onInputOverflow();
      return;
    }

    setInputFields([...inputFields, ""]);
  };

  useEffect(() => {
    setInputFields(["", "", "", ""]);
  }, []);

  return (
    <div className="comic-input-form">
      {inputFields.map((inputField, idx) => (
        <div key={idx}>
          <ComicInput
            key={idx}
            type="text"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              inputFields[idx] = event.target.value;
              setInputFields([...inputFields]);
            }}
          />
        </div>
      ))}
      <button onClick={addInputField}>Add</button>
      <button onClick={() => props.onGenerateComics(inputFields)}>
        Generate
      </button>
      <button onClick={props.onDownloadComic}>Download</button>
    </div>
  );
};

export default ComicInputForm;
