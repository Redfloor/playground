import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { authService } from '../../authService';
import { Button } from 'primereact/button';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      genre
      pageCount
      author {
        firstName
        lastName
      }
    }
  }
`;

export const BooksTest: React.FC = () => {
  const { data, loading, error, refetch } = useQuery(GET_BOOKS);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const isAuthenticated = !!authService.getToken();

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setLoginError(null);
    const success = await authService.login('test', 'test');
    setIsLoggingIn(false);
    if (!success) setLoginError('Login failed');
    else refetch();
  };

  const handleLogout = () => {
    authService.logout();
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
      <h2>Books Test Page</h2>
      <div style={{ marginBottom: '1rem' }}>
        {isAuthenticated ? (
          <Button label="Logout" onClick={handleLogout} />
        ) : (
          <Button label={isLoggingIn ? "Logging in..." : "Login as test/test"} onClick={handleLogin} disabled={isLoggingIn} />
        )}
        {loginError && <div style={{ color: 'red', marginTop: 8 }}>{loginError}</div>}
      </div>
      {loading && <div>Loading books...</div>}
      {error && <div style={{ color: 'red' }}>Error loading books</div>}
      <ul>
        {data?.books?.map((book: any) => (
          <li key={book.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
            <strong>{book.title}</strong>
            {isAuthenticated && (
              <>
                <div>Genre: {book.genre}</div>
                <div>Page Count: {book.pageCount}</div>
                <div>Author: {book.author?.firstName} {book.author?.lastName}</div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
