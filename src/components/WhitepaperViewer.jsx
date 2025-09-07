// src/components/WhitepaperViewer.jsx
import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

// Configura el worker de pdf.js como una URL
pdfjs.GlobalWorkerOptions.workerSrc =
  "/node_modules/pdfjs-dist/build/pdf.worker.js";

const WhitepaperViewer = ({ open, onClose, pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onDocumentLoadError = (error) => {
    console.error("Error al cargar el PDF:", error);
    setError(error.message);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg relative w-full max-w-4xl max-h-[90vh] overflow-auto sm:p-6">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          &times;
        </button>
        {error ? (
          <div className="text-red-500 text-center">Error: {error}</div>
        ) : (
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
          >
            <HTMLFlipBook
              width={300}
              height={400}
              size="stretch"
              minWidth={200}
              maxWidth={600}
              minHeight={300}
              maxHeight={800}
              className="mx-auto"
            >
              {Array.from(new Array(numPages || 0), (el, index) => (
                <div key={`page_${index + 1}`} className="bg-white shadow-md">
                  <Page
                    pageNumber={index + 1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width={300}
                    className="sm:w-full"
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </Document>
        )}
      </div>
    </div>
  );
};

export default WhitepaperViewer;
