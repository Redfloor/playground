import { Resolvers } from '../../resolvers-types';
import { books } from "./queries/books";

export const resolvers: Resolvers = {
    Query: {
        // @ts-ignore
        books: (parent: any, args: any) => {
            return books.find(u => u.id === args.id);
        }
    }
}