import { Context } from '../../utils';

export class AlbumService {
    create(input, context: Context, info) {
        return context.db.mutation.createAlbum({
            data: { ...input }
        }, info);
    }

    async edit(input, context: Context, info) {
        const { id, name } = input;
        const albumExists = await context.db.exists.Album({ id });

        if (!albumExists) {
          throw new Error("Albumnot found");
        }
    
        return context.db.mutation.updateAlbum({
            where: { id },
            data: { name }
        }, info);
    }

    async delete(id , context: Context) {
      const albumExists = await context.db.exists.Album({ id });
  
      if (!albumExists) {
        throw new Error(`Album not found or you're not authorized to perform action`);
      }
  
      return context.db.mutation.deleteAlbum({ where: { id } });
    }

    findOne(id, context: Context, info) {
        return context.db.query.album({ where: { id } }, info);
    }

    findMany(input, context: Context, info) {
        const { first, last, after, before } = input;
        return context.db.query.albumsConnection({
            first,
            last,
            after,
            before,
            orderBy: 'createdAt_DESC'
        }, info);
    }
}