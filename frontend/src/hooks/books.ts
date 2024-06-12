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

  const client = useContext(GraphQlContext)!; // TODO:

  const { loading, data, error } = useQuery<{ books: Array<Book> }>(
    BOOK_QUERY,
    { client },
  );

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
    loading,
    total,
  };
}


