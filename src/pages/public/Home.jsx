import Banner from "../../components/Homepage/Banner";
import Faq from "../../components/Homepage/Faq";
import Features from "../../components/Homepage/Features";
import UpcomingEvents from "../../components/Homepage/UpcomingEvents";
import PdfViewer from "../../components/PdfViewer";

const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <Faq />
      <UpcomingEvents />
      {/* <PdfViewer
        pdfLink={
          "https://drive.google.com/file/d/1GiwcvgqDHKv_n6ExwKaXvA6dXw48rGju/view?usp=sharing"
        }
      /> */}
    </>
  );
};

export default Home;
