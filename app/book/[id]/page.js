'use client'

import { useParams } from 'next/navigation';
import Layout from '../../../components/Layout';
import BookSummary from '../../../components/BookSummary';

const books = [
  {
    id: 1,
    title: "Ramayanam",
    author: "Valmiki",
    briefSynopsis: "The Ramayana is one of the two great epics of Hindu mythology, written by the sage Valmiki. It tells the story of Rama, the prince of Ayodhya, his wife Sita, and his loyal brother Lakshmana. The epic showcases Rama's journey of righteousness, duty, and honor, emphasizing the eternal battle between good and evil. It is a revered text in Hindu culture and provides valuable teachings about devotion, family, and dharma (duty).",
    fullSynopsis: "The Ramayana remains a powerful symbol of dharma, sacrifice, and devotion. Rama is regarded as an ideal king and a paragon of virtue, while Sita is revered as the embodiment of purity and loyalty. The epic has deeply influenced the culture, art, and values of India and many other countries in Southeast Asia. Its teachings inspire the pursuit of moral righteousness and ethical living. Even today, the characters and lessons from the Ramayana are central to Hindu festivals like Diwali, which celebrates Rama’s return to Ayodhya after defeating Ravana."
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    briefSynopsis: "Set in a dystopian future, the novel explores the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviors within society.",
    fullSynopsis: "The story takes place in an imagined future, the year 1984, when much of the world has fallen victim to perpetual war, omnipresent government surveillance, historical negationism, and propaganda. Great Britain, known as Airstrip One, has become a province of a totalitarian superstate named Oceania that is ruled by the Party who employ the Thought Police to persecute individuality and independent thinking.\n\nThe protagonist, Winston Smith, is a diligent and skillful rank-and-file worker and Outer Party member who secretly hates the Party and dreams of rebellion. He enters into a forbidden relationship with a colleague, Julia, and starts to remember what life was like before the Party came to power."
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    briefSynopsis: "Set in the Deep South during the Great Depression, the novel follows three years in the life of 8-year-old Scout Finch, her brother, Jem, and their father, Atticus—a widowed lawyer and the novel's moral hero.",
    fullSynopsis: "To Kill a Mockingbird takes place in the fictional town of Maycomb, Alabama, during the Great Depression. The protagonist is Jean Louise Finch, an intelligent though unconventional girl who ages from six to nine years old during the course of the novel. She is raised with her brother, Jeremy Atticus, by their widowed father, Atticus Finch. He is a prominent lawyer who encourages his children to be empathetic and just.\n\nThe story covers three years, during which Scout and Jem undergo a loss of innocence. The book is renowned for its warmth and humor, despite dealing with serious issues of rape and racial inequality. It also addresses issues of class, courage, compassion, and gender roles in the American Deep South."
  }
];

export default function BookPage() {
  const params = useParams();
  const book = books.find(b => b.id === parseInt(params.id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <Layout>
      <BookSummary book={book} />
    </Layout>
  );
}