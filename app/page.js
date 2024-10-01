'use client'

import { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import BookGrid from '../components/BookGrid';

const books = [
  {
    id: 1,
    title: "Ramayanam",
    author: "Valmiki",
    summary: "The Ramayana is one of the two great epics of Hindu mythology, written by the sage Valmiki. It tells the story of Rama, the prince of Ayodhya, his wife Sita, and his loyal brother Lakshmana. The epic showcases Rama's journey of righteousness, duty, and honor, emphasizing the eternal battle between good and evil. It is a revered text in Hindu culture and provides valuable teachings about devotion, family, and dharma (duty).",
    audioSummary: "/audio/ramayana.wav"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    summary: "A dystopian novel set in a totalitarian society, exploring themes of surveillance and control."
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    summary: "A powerful story of racial injustice and loss of innocence in the American South."
  }
];

export default function Home() {
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (searchTerm) => {
    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <Layout>
      <h1 className="text-4xl font-serif font-bold text-center mb-8">Classics Condensed</h1>
      <SearchBar onSearch={handleSearch} />
      <BookGrid books={filteredBooks} />
    </Layout>
  );
}