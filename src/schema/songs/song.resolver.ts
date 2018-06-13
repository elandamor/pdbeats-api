/**
 *
 * Resolvers for Song
 *
 */

import { PubSub } from 'graphql-subscriptions';
import { Context } from '../../utils';
import { SongService } from './song.service';

const pubsub = new PubSub();
const service = new SongService();

export default {
  Mutation: {
    createSong: (_, { input }, context: Context, info) => service.create(input, context, info),
    deleteSong: (_, { id }, context: Context) => service.delete(id, context),
    editSong: (_, { input }, context: Context, info) => service.edit(input, context, info),
  },
  Query: {
    music: (_, args, context: Context, info) => service.findMany(args, context, info),
    song: (_, { id }, context: Context, info) => service.findOne(id, context, info),
  },

  // Subscription: {
  //   song: () => pubsub.asyncIterator('SONG_CREATED')
  // }
};
