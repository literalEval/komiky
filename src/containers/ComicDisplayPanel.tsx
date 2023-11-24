import { CircularProgress } from "@mui/joy";
import "./comic_display_panel.css";

import WowSuchEmpty from "../components/WowSuchEmpty";

import { Rnd } from "react-rnd";
import { useState } from "react";
import BubbleBar from "./BubbleBar";

const ComicDisplayPanel = (props: any): JSX.Element => {
  const [bubbleList, setBubbleList] = useState<string[]>([]);
  const [bubbleDimList, setBubbleDimList] = useState<number[][]>([]);

  const addBubble = (newBubble: string) => {
    setBubbleList([...bubbleList, newBubble]);
    setBubbleDimList([...bubbleDimList, [96, 96]]);
  };

  return (
    <div
      className="comic-display-hud"
      style={{
        marginTop: props.comicStrips?.length ? "8rem" : "0px",
      }}
    >
      <div
        className="comic-display-panel"
        style={{
          padding: "4px",
          width: "90%",
          backgroundColor: props.comicStrips?.length
            ? "#F8FAF5"
            : "transparent",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.comicStrips?.length ? (
          <div className="comic-display-panel-inner">
            {bubbleList.map((bubble: string, idx: number) => {
              return (
                <Rnd
                  key={idx + "_bubble"}
                  bounds="parent"
                  // default={{
                  // x: 0,
                  // y: 0,
                  // width: "100%",
                  // height: "100%",
                  // }}
                  onResize={(e, direction, ref, delta, position) => {
                    bubbleDimList[idx] = [ref.offsetWidth, ref.offsetHeight];
                    setBubbleDimList([...bubbleDimList]);
                  }}
                >
                  <img
                    width={bubbleDimList[idx] + "rem"}
                    alt="bubble_one"
                    src={bubble}
                  ></img>
                </Rnd>
              );
            })}
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
          <WowSuchEmpty></WowSuchEmpty>
        )}
      </div>
      {props.comicStrips?.length ? (
        <BubbleBar onAddBubble={addBubble}></BubbleBar>
      ) : null}
    </div>
  );
};

export default ComicDisplayPanel;
