import { useState } from 'react';

export default function BookSummary({ book }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-serif font-bold mb-2 text-center">{book.title}</h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center">{book.author}</h2>
      <div className="font-serif text-lg leading-relaxed space-y-4">
        <p>{book.briefSynopsis}</p>
        {expanded && (
          <>
            {book.fullSynopsis.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </>
        )}
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}