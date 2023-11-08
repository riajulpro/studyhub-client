import PdfViewer from "../../components/PdfViewer";

const Home = () => {
  return (
    <div>
      <PdfViewer
        pdfLink={
          "https://drive.google.com/file/d/1GiwcvgqDHKv_n6ExwKaXvA6dXw48rGju/view?usp=sharing"
        }
      />
    </div>
  );
};

export default Home;
