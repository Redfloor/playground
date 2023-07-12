import { books } from "./queries/books";
export const resolvers = {
    Query: {
        books: (parent, args) => {
            return books.find(u => u.id === args.id);
        }
    }
};
