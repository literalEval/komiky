import { useState } from "react";
import ComicDisplayPanel from "../components/ComicDisplayPanel";
import ComicInputForm from "../components/ComicInputForm";

import "./home.css";
import fetchComics from "../hooks/fetch_comics";

const Home = (props: any): JSX.Element => {
  const [comicStrips, setComicStrips] = useState<Blob[]>([]);

  const generateComics = (inputFields: string[]) => {
    setComicStrips([]);

    if (inputFields.length >= 10 || comicStrips.length >= 10) {
      return;
    }

    console.log(comicStrips);
    inputFields.forEach((field) => {
      console.log(field);
      fetchComics({ inputs: field }).then((response) => {
        comicStrips.push(response);
        setComicStrips([...comicStrips]);
      });
    });
  };

  return (
    <section className="home">
      <ComicInputForm onGenerateComics={generateComics}></ComicInputForm>
      <ComicDisplayPanel comicStrips={comicStrips}></ComicDisplayPanel>
    </section>
  );
};

export default Home;
