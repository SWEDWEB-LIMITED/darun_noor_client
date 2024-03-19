import React from "react";
import OnlineLibrarySingle from "./OnlineLibrarySingle";

const bookData = [
  {
    id: "1",
    title: "Book 1",
    description: "This is the description for Book 1.",
    pdfUrl: "https://example.com/book1.pdf",
  },
  {
    id: "2",
    title: "Book 2",
    description: "This is the description for Book 2.",
    pdfUrl: "https://example.com/book2.pdf",
  },
  // Add more book data as needed
];

const OnlineLibrary: React.FC = () => {
  return (
    <div>
      <OnlineLibrarySingle books={bookData} />
    </div>
  );
};

export default OnlineLibrary;
