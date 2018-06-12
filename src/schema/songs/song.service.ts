import { Context } from '../../utils';

export class SongService {
    async create(input, context: Context, info) {
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

    async edit(input, context: Context, info) {
        const { id, title } = input;
        const songExists = await context.db.exists.Song({ id });

        if (!songExists) {
          throw new Error("Song not found");
        }
    
        return context.db.mutation.updateSong({
            where: { id },
            data: { title }
        }, info);
    }

    async delete(id , context: Context) {
      const songExists = await context.db.exists.Song({ id });
  
      if (!songExists) {
        throw new Error(`Song not found or you're not authorized to perform action`);
      }
  
      return context.db.mutation.deleteSong({ where: { id } });
    }

    findOne(id, context: Context, info) {
        return context.db.query.song({ where: { id } }, info);
    }

    findMany(input, context: Context, info) {
        const { first, last, after, before } = input;
        return context.db.query.songsConnection({
            first,
            last,
            after,
            before,
            orderBy: 'createdAt_DESC'
        }, info);
    }
}