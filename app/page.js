'use client'

import { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import BookGrid from '../components/BookGrid';
import Link from 'next/link';

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

const categories = [
  {
    name: "Fiction",
    books: [
      { id: 1, title: "Pride and Prejudice" },
      { id: 2, title: "1984" },
      { id: 3, title: "To Kill a Mockingbird" },
    ]
  },
  {
    name: "Non-fiction",
    books: [
      { id: 4, title: "A Brief History of Time" },
      { id: 5, title: "The Diary of a Young Girl" },
    ]
  },
  {
    name: "Historical",
    books: [
      { id: 6, title: "War and Peace" },
      { id: 7, title: "All Quiet on the Western Front" },
    ]
  },
  {
    name: "Romance",
    books: [
      { id: 8, title: "Jane Eyre" },
      { id: 9, title: "Wuthering Heights" },
    ]
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

export function CategoriesPage() {
  return (
    <Layout>
      <h1>Categories</h1>
      {categories.map(category => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <ul>
            {category.books.map(book => (
              <li key={book.id}>
                <Link href={`/book/${book.id}`}>
                  <a>{book.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Layout>
  );
}
