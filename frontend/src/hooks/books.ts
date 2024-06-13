import { useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import { GraphQlContext } from '@/data/graphQl';
import { type Book } from '@/types/queries';

const BOOK_QUERY = gql`
      query GetBooks {
        books {
          title
          author
          coverPhotoURL
          readingLevel
        }
      }
    `;

export function useBooks(page: number, limit?: number) {
  if (page < 1) throw new Error(`invalid 'page' number '${page}'`);

  const client = useContext(GraphQlContext)!;

  const { loading, data, error } = useQuery<{ books: Array<Book> }>(
    BOOK_QUERY, // TODO: Backend create filter variable
    { client },
  );

  function setFilter(title: string | null) {
    console.error("TODO: backend create filter query", title);
  }

  let books = data?.books || [];

  const total = books.length; // TODO:  BE implement graphql cursors
  const max = (limit == undefined) ? total : limit;
  const start = (page - 1) * max;
  const end = start + (start + max);

  books = books.map(book => {
    return {
      ...book,
      id: `${book.title}-${book.author}-${book.coverPhotoURL}-${book.readingLevel}`
    }
  }).slice(start, end);

  return {
    books,
    error,
    setFilter,
    loading,
    total,
  };
}


