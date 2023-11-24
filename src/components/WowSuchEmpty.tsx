import { Typography } from "@mui/joy";
import EmptyDoge from "../img/such_empty.svg";

const WowSuchEmpty = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundClip: "padding-box",
          backgroundColor: "#ECE8F1",
          borderRadius: "50%",
          padding: "8%",
          width: "14.8rem",
          height: "14.8rem",
        }}
      >
        <img alt="empty_info" src={EmptyDoge} width={"240rem"}></img>
      </div>
      <Typography
        sx={{ m: "2rem 0rem" }}
        variant="plain"
        color="neutral"
        textColor={"#ECE8F1"}
        level="h1"
        fontFamily="monospace"
      >
        Wow, Such Empty
      </Typography>
    </div>
  );
};

export default WowSuchEmpty;
