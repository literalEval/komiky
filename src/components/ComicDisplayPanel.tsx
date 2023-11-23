import WowSuchEmpty from "../img/such_empty.svg";

const ComicDisplayPanel = (props: any): JSX.Element => {
  return (
    <div
      style={{
        padding: "4px",
        backgroundColor: "#F8FAF5",
      }}
    >
      {props.comicStrips?.length ? (
        <div
          style={{
            backgroundColor: "#F8FAF5",
            display: "grid",
            gap: "0.4em",
            gridTemplateRows: "auto",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
          }}
        >
          {props.comicStrips?.map((comicStrip: Blob, idx: number) => {
            return (
              <img
                key={idx}
                alt="comic_pane"
                src={URL.createObjectURL(comicStrip)}
                style={{
                  border: "4px solid #121617",
                  borderRadius: "4px",
                }}
              />
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
