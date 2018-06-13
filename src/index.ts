import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';
import * as schema from './schema';
import { makeDebugger } from './lib';

const debug = makeDebugger('API');
const server = new GraphQLServer({
  ...schema,
  context: (req) => ({
    ...req,
    db: new Prisma({
      debug: Boolean(process.env.NODE_ENV === 'production'),
      endpoint: process.env.PRISMA_ENDPOINT,
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
    debug,
  }),
});

server.start(() => debug('Server is running on http://localhost:4000'));
