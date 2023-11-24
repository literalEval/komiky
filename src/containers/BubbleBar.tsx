import ThoughtBubbleTwo from "../img/thought_bubble_two.png";
import ChatBubbleOne from "../img/chat_bubble_one.png";
import ChatBubbleTwo from "../img/chat_bubble_two.png";
import { Button, ButtonGroup } from "@mui/joy";

const BubbleBar = (props: any): JSX.Element => {
  const bubbles: string[] = [
    ThoughtBubbleTwo,
    ChatBubbleOne,
    ChatBubbleTwo,
  ];

  return (
    <ButtonGroup>
      {bubbles.map((bubble, idx) => {
        return (
          <Button
            key={bubble + "_button"}
            onClick={() => props.onAddBubble(bubbles[idx])}
          >
            <img width="48rem" alt={bubble + "_icon"} src={bubble}></img>
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default BubbleBar;
