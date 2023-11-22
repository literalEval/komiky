import ComicDisplayPanel from "../components/ComicDisplayPanel";
import ComicInputForm from "../components/ComicInputForm";

const Home = (props: any): JSX.Element => {

  return (
    <section>
      <ComicDisplayPanel></ComicDisplayPanel>
      <ComicInputForm></ComicInputForm>
    </section>
  );
};

export default Home;
