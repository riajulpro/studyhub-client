import { useState } from "react";
import { Document, Page } from "react-pdf";

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const pageNumber = 1;

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document
        file="https://drive.google.com/file/d/1GiwcvgqDHKv_n6ExwKaXvA6dXw48rGju/view?usp=sharing" // Replace with your actual PDF URL
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PdfViewer;
