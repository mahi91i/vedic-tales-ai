import Layout from '../../components/Layout';
import Link from 'next/link';

const books = [
  { id: 1, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

export default function BrowseBooksPage() {
  const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Layout>
      <h1 className="text-4xl font-serif font-bold mb-8 text-center">Browse Books</h1>
      <ul className="space-y-4">
        {sortedBooks.map((book) => (
          <li key={book.id} className="border-b pb-2">
            <Link href={`/book/${book.id}`} className="hover:text-gray-600">
              <h2 className="text-xl font-serif">{book.title}</h2>
              <p className="text-sm text-gray-600">{book.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}