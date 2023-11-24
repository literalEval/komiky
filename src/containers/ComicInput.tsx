import "./comic_input.css";
import { Textarea } from "@mui/joy";

const ComicInput = (props: any): JSX.Element => {
  return (
    <div className="comic-input">
      <Textarea
        style={{ backgroundColor: "#151515aa", color: "#ECE8F1" }}
        size="lg"
        variant="solid"
        onChange={props.onChange}
        placeholder="Superman asks Batman..."
      />
    </div>
  );
};

export default ComicInput;
