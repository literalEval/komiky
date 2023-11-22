import { ChangeEvent, useState } from "react";

const ComicInput = (props: any): JSX.Element => {
  const [value, setValue] = useState<String>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.changeValue(e.target.value);
  };

  return <input onChange={onChange}></input>;
};

export default ComicInput;
