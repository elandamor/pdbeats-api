import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';
import * as schema from './schema';

const server = new GraphQLServer({
  ...schema,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API
      debug: Boolean(process.env.NODE_ENV === 'production'), // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
})
server.start(() => console.log('Server is running on http://localhost:4000'))
