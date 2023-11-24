import { Typography } from "@mui/joy";
import EmptyDoge from "../img/such_empty.svg";

const WowSuchEmpty = (props: any) => {
  return (
    <div>
      <div
        style={{
          backgroundClip: "padding-box",
          backgroundColor: "white",
          borderRadius: "50%",
          padding: "8%",
          width: "100%",
        }}
      >
        <img alt="empty_info" src={EmptyDoge} width={"240rem"}></img>
      </div>
      <Typography>Wow, Such Empty</Typography>
    </div>
  );
};

export default WowSuchEmpty;
