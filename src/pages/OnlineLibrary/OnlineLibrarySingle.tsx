import React from "react";

interface BookData {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
}

interface OnlineLibraryProps {
  books: BookData[];
}

const OnlineLibrarySingle: React.FC<OnlineLibraryProps> = ({ books }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Online Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-4">{book.description}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => window.open(book.pdfUrl, "_blank")}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Read Online
                </button>
                <a
                  href={book.pdfUrl}
                  download={`${book.title}.pdf`}
                  className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineLibrarySingle;
