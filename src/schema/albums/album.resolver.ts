/**
 *
 * Resolvers for Album
 *
 */

import { PubSub } from 'graphql-subscriptions';
import { Context } from '../../utils';
import { AlbumService } from './album.service';

const pubsub = new PubSub();
const service = new AlbumService();

export default {
  Mutation: {
    addAlbum: (_, { input }, context: Context, info) => service.create(input, context, info),
    deleteAlbum: (_, { id }, context: Context) => service.delete(id, context),
    editAlbum: (_, { input }, context: Context, info) => service.edit(input, context, info),
  },
  Query: {
    album: (_, { id }, context: Context, info) => service.findOne(id, context, info),
    albums: (_, args, context: Context, info) => service.findMany(args, context, info),
  },

  // Subscription: {
  //   album: () => pubsub.asyncIterator('ALBUM_CREATED')
  // }
};
