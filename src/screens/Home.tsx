import { useState } from "react";
import ComicDisplayPanel from "../components/ComicDisplayPanel";
import ComicInputForm from "../components/ComicInputForm";

import "./home.css";
import fetchComics from "../hooks/fetch_comics";
import { Modal, Typography, ModalClose, Sheet } from "@mui/joy";
import html2canvas from "html2canvas";
import downloadFile from "../hooks/download_file";

const Home = (props: any): JSX.Element => {
  const [comicStrips, setComicStrips] = useState<(Blob | null)[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const generateComics = (inputFields: string[]) => {
    setComicStrips((oldValue: (Blob | null)[]): (Blob | null)[] => {
      if (inputFields.length > 10) {
        setOpen(true);
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

  return (
    <section className="home">
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
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
        onGenerateComics={generateComics}
        onDownloadComic={downloadComic}
      ></ComicInputForm>
    </section>
  );
};

export default Home;
