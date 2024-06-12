import { type Book } from '@/types/queries';
import {
  useState, createContext,
  useContext,
  createElement,
  PropsWithChildren,
} from 'react';

export interface State {
  books: Array<Book>
  findBook: (id: string) => Book | null,
  removeBook: (id: string) => void,
  addBook: (book: Book) => void,
}

const Context = createContext<State>(
  {
    books: [],
    addBook: () => { },
    findBook: () => null,
    removeBook: () => { },
  }
);

export function useReadingList() {
  const {
    addBook,
    findBook,
    books,
    removeBook,
  } = useContext(Context);

  return {
    addBook,
    findBook,
    books,
    removeBook,
  };
}

export default function Provider({ children }: PropsWithChildren) {

  const [books, setBooks] = useState<Array<Book>>([]);

  function addBook(book: Book) {
    if (findBook(book.id) != null) {
      // shouldn't be able to add a book that's already in the reading list
      console.warn('book already in reading list');
      return;
    }

    setBooks(bks => ([...bks, book]));
  }

  function findBook(id: string) {
    const book = books.find(book => (book.id === id));
    return book || null;
  }

  function removeBook(id: string) {
    const book = books.find(book => (book.id === id));
    if (!book) {
      console.warn(`book not in reading list ${id}`);
    }

    setBooks(books => [...books.filter(book => book.id !== id)]);
  }

  const state = {
    findBook,
    addBook,
    books,
    removeBook,
  }

  return createElement(
    Context.Provider,
    { value: state },
    children
  );
}

