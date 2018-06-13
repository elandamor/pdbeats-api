import { GraphQLClient } from 'graphql-request';
import { AlbumConnection } from '../../generated/prisma';

const client = new GraphQLClient('http://localhost:4000');
jest.setTimeout(50000);

const ALBUMS_QUERY = `
    query albums {
      albums {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;

describe('Error check album queries', () => {
  test('albums should be defined', async () => {
    const albums = await client.request<AlbumConnection>(ALBUMS_QUERY);
    expect(albums).toBeDefined();
  });
});
