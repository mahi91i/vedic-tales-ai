import Link from 'next/link';
import { useState } from 'react';

export default function BookGrid({ books }) {
  const [playingAudio, setPlayingAudio] = useState(null);

  const handlePlay = (audioSrc) => {
    if (playingAudio) {
      playingAudio.pause();
    }
    const audio = new Audio(audioSrc);
    audio.play();
    setPlayingAudio(audio);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <div key={book.id} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-serif font-bold mb-2">{book.title}</h2>
          <p className="text-gray-600 mb-4">{book.author}</p>
          <p className="text-gray-800 mb-4">{book.summary}</p>
          <div className="mb-4">
            <button
              onClick={() => handlePlay(book.audioSummary)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              ▶ Play Podcast Summary
            </button>
          </div>
          <Link href={`/book/${book.id}`} className="text-blue-600 hover:underline">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}