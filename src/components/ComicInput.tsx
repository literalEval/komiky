import { ChangeEvent, useState } from "react";

import "./comic_input.css";

const ComicInput = (props: any): JSX.Element => {
  // const [value, setValue] = useState<String>();

  // const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  //   props.changeValue(e.target.value);
  // };

  return (
    <div className="comic-input">
      <textarea onChange={props.onChange}></textarea>
    </div>
  );
};

export default ComicInput;
