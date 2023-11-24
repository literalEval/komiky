import { ChangeEvent, useState } from "react";

import "./comic_input.css";
import { Textarea } from "@mui/joy";

const ComicInput = (props: any): JSX.Element => {
  // const [value, setValue] = useState<String>();

  // const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  //   props.changeValue(e.target.value);
  // };

  return (
    <div className="comic-input">
      <Textarea onChange={props.onChange} placeholder="Type in here…" />
    </div>
  );
};

export default ComicInput;
