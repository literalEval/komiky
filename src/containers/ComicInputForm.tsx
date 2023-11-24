import React, {
  ChangeEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import ComicInput from "./ComicInput";

import "./comic_input_form.css";

const ComicInputForm = forwardRef((props: any, ref): JSX.Element => {
  const [inputFields, setInputFields] = useState<Array<string>>([]);

  useImperativeHandle(ref, () => ({
    addInputField() {
      addInputField();
    },
    generateComics() {
      props.onGenerateComics(inputFields);
    },
  }));

  const addInputField = () => {
    if (inputFields.length === 8) {
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
    </div>
  );
});

export default ComicInputForm;
