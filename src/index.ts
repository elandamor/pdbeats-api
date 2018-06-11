import { GraphQLServer } from 'graphql-yoga'
import { importSchema } from 'graphql-import'
import { Prisma } from './generated/prisma'
import { Context } from './utils'

const resolvers = {
  Query: {
    music(parent, args, context: Context, info) {
      return context.db.query.songs({ }, info)
    },
  },
  Mutation: {
    async createSong(parent, { input }, context: Context, info) {
      const { album, artist, featuring, title } = input;

      const albumExists = await context.db.exists.Album({
        alias: album.alias,
      });

      const artistExists = await context.db.exists.Artist({
        alias: artist.alias,
      });

      const featuringExists = await context.db.exists.Artist({
        alias: featuring ? featuring.alias : '',
      });
      
      /**
       * TODO: Refactor this for scenario where either album or artist is true
       */

      if (albumExists && artistExists && featuringExists) {
        return context.db.mutation.createSong({
          data: {
            album: {
              connect: { alias: album.alias },
            },
            artist: {
              connect: { alias: artist.alias },
            },
            featuring: {
              connect: { alias: featuring.alias },
            },
            title,
          }
        }, info);
      }

      if (albumExists && artistExists) {
        return context.db.mutation.createSong({
          data: {
            album: {
              connect: { alias: album.alias },
            },
            artist: {
              connect: { alias: artist.alias },
            },
            title,
          }
        }, info);
      }

      const createdArtist = await context.db.mutation.createArtist({ 
        data: {
          alias: artist.alias,
          name: artist.name,
        },
      }, info);

      const createdAlbum = await context.db.mutation.createAlbum({ 
        data: {
          alias: album.alias,
          artist: {
            connect: {
              id: createdArtist.id,
            },
          },
          name: album.name,
        },
      }, info);

      /**
       * TODO: Refactor to handle creation of more that one artist feature
       */
      const createdFeature = await context.db.mutation.createArtist({ 
        data: {
          alias: featuring.alias,
          name: featuring.name,
        },
      }, info);

      return context.db.mutation.createSong({
        data: {
          album: {
            connect: { 
              id: createdAlbum.id,
            },
          },
          artist: {
            connect: {
              id: createdArtist.id,
            },
          },
          featuring: {
            connect: {
              id: createdFeature.id,
            },
          },
          title,
        }
      }, info);
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: 'https://eu1.prisma.sh/elandamor/pdPrisma/dev', // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
})
server.start(() => console.log('Server is running on http://localhost:4000'))
