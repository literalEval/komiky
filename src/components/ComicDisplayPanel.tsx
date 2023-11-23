import { CircularProgress } from "@mui/joy";
import WowSuchEmpty from "../img/such_empty.svg";
import "./comic_display_panel.css";

const ComicDisplayPanel = (props: any): JSX.Element => {
  return (
    <div
      className="comic-display-panel"
      style={{
        padding: "4px",
        width: "90%",
        backgroundColor: props.comicStrips?.length ? "#F8FAF5" : "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.comicStrips?.length ? (
        <div className="comic-display-panel-inner">
          {props.comicStrips?.map((comicStrip: Blob | null, idx: number) => {
            return comicStrip ? (
              <img
                key={idx}
                alt="comic_pane"
                src={URL.createObjectURL(comicStrip)}
                width="94%"
                style={{
                  border: "4px solid #121617",
                  borderRadius: "4px",
                }}
              />
            ) : (
              <div
                key={idx}
                style={{
                  width: "23%",
                  aspectRatio: "1/1",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </div>
            );
          })}
        </div>
      ) : (
        <img alt="empty_info" src={WowSuchEmpty} width={"240rem"}></img>
      )}
    </div>
  );
};

export default ComicDisplayPanel;
