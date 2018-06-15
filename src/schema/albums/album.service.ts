import { Context } from '../../utils';

export class AlbumService {
  public create(input, context: Context, info) {
    return context.db.mutation.createAlbum(
      {
        data: { ...input },
      },
      info,
    );
  }

  public async edit(input, context: Context, info) {
    const { id, name } = input;
    const albumExists = await context.db.exists.Album({ id });

    if (!albumExists) {
      throw new Error('Album not found');
    }

    return context.db.mutation.updateAlbum(
      {
        data: { name },
        where: { id },
      },
      info,
    );
  }

  public async delete(id, context: Context) {
    const albumExists = await context.db.exists.Album({ id });

    if (!albumExists) {
      throw new Error(`Album not found or you're not authorized to perform action`);
    }

    return context.db.mutation.deleteAlbum({ where: { id } });
  }

  public findOne(id, context: Context, info) {
    return context.db.query.album({ where: { id } }, info);
  }

  public findMany(input, context: Context, info) {
    const { first, last, after, before } = input;
    return context.db.query.albumsConnection(
      {
        after,
        before,
        first,
        last,
        orderBy: 'createdAt_DESC',
      },
      info,
    );
  }
}
