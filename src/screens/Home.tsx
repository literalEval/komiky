import { useRef, useState } from "react";
import ComicDisplayPanel from "../containers/ComicDisplayPanel";
import ComicInputForm from "../containers/ComicInputForm";

import "./home.css";
import fetchComics from "../hooks/fetch_comics";
import { Modal, Typography, ModalClose, Sheet, Button } from "@mui/joy";
import html2canvas from "html2canvas";
import downloadFile from "../hooks/download_file";
import Header from "../containers/Header";
import MediaQuery, { useMediaQuery } from "react-responsive";

const Home = (props: any): JSX.Element => {
  const [comicStrips, setComicStrips] = useState<(Blob | null)[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const inputFormRef = useRef();

  const generateComics = (inputFields: string[]) => {
    setComicStrips((oldValue: (Blob | null)[]): (Blob | null)[] => {
      if (inputFields.length > 10) {
        setModalOpen(true);
        return oldValue;
      }

      console.log(comicStrips);

      const newComicStrips: (Blob | null)[] = [];

      inputFields.forEach((field, idx) => {
        newComicStrips.push(null);
        // setComicStrips([...comicStrips]);

        fetchComics({ inputs: field }).then((response) => {
          comicStrips[idx] = response;
          setComicStrips([...comicStrips]);
        });
      });

      return newComicStrips;
    });
  };

  const downloadComic = async () => {
    const canvas = await html2canvas(
      document.getElementsByClassName("comic-display-panel")[0] as HTMLElement
    );
    downloadFile(canvas.toDataURL("image/png", 1.0));
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <section className="home">
      <Header>
        <Button
          sx={{ m: "0rem 0.5rem" }}
          onClick={() => downloadComic()}
          size={isDesktopOrLaptop ? "lg" : "sm"}
          startDecorator={
            isDesktopOrLaptop ? <i className="fas fa-download"></i> : undefined
          }
        >
          {isDesktopOrLaptop ? "Download" : ""}
          {isDesktopOrLaptop ? "" : <i className="fas fa-download"></i>}
        </Button>
        <Button
          sx={{ m: "0rem 0.5rem" }}
          onClick={() => (inputFormRef.current as any)?.generateComics()}
          size={isDesktopOrLaptop ? "lg" : "sm"}
          startDecorator={
            isDesktopOrLaptop ? <i className="fas fa-hammer"></i> : undefined
          }
        >
          {isDesktopOrLaptop ? "Generate" : ""}
          {isDesktopOrLaptop ? "" : <i className="fas fa-hammer"></i>}
        </Button>
        <Button
          sx={{ m: "0rem 0.5rem" }}
          onClick={() => (inputFormRef.current as any)?.addInputField()}
          variant="soft"
          size={isDesktopOrLaptop ? "lg" : "sm"}
          startDecorator={
            isDesktopOrLaptop ? <i className="fas fa-plus"></i> : undefined
          }
        >
          {isDesktopOrLaptop ? "Add" : ""}
          {isDesktopOrLaptop ? "" : <i className="fas fa-plus"></i>}
        </Button>
      </Header>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Oops.. We are on budget
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            The image generation API takes some time to work. So, the current
            count of images is capped at 10.
          </Typography>
        </Sheet>
      </Modal>

      <ComicDisplayPanel comicStrips={comicStrips}></ComicDisplayPanel>
      <ComicInputForm
        ref={inputFormRef}
        onGenerateComics={generateComics}
        onDownloadComic={downloadComic}
        onInputOverflow={() => setModalOpen(true)}
      ></ComicInputForm>
    </section>
  );
};

export default Home;
