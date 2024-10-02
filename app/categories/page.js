import Layout from '../../components/Layout';
import Link from 'next/link';

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

export default function CategoriesPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-serif font-bold mb-8 text-center">Browse by Category</h1>
      <div className="space-y-8">
        {categories.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-serif font-bold mb-4">{category.name}</h2>
            <ul className="space-y-2">
              {category.books.map((book) => (
                <li key={book.id}>
                  <Link href={`/book/${book.id}`} className="hover:text-gray-600">
                    {book.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}