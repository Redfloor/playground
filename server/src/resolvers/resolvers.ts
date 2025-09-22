import { Resolvers } from '../../resolvers-types';
import { books } from "./queries/books.js";
import jwt from 'jsonwebtoken';
import { Book, Author } from '../../resolvers-types';

const TEST_USER = { id: 1, username: 'test', password: 'test' };
const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';

export const resolvers: Resolvers = {
    Query: {
        books: (parent: unknown, args: unknown, context: any): Book[] => {
            if (context?.isAuthenticated) {
                // Return full book data
                return books;
            } else {
                // Return only title and id for unauthenticated users, with dummy Author
                return books.map(({ id, title }) => ({
                    id,
                    title,
                    author: { id: 0, firstName: '', lastName: '' },
                    genre: '',
                    pageCount: 0
                }));
            }
        }
    },
    Mutation: {
        login: async (parent: unknown, args: { username: string; password: string }) => {
            const { username, password } = args;
            if (username === TEST_USER.username && password === TEST_USER.password) {
                const token = jwt.sign({ id: TEST_USER.id, username: TEST_USER.username }, JWT_SECRET, { expiresIn: '1h' });
                return {
                    token,
                    user: { id: TEST_USER.id, username: TEST_USER.username }
                };
            }
            throw new Error('Invalid credentials');
        }
    }
};
