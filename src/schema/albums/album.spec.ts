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
    test('albums should return empty array', async () => {
        const { albums: { edges } } = await client.request<albums: AlbumConnection}>(ALBUMS_QUERY);
        expect(edges).toHaveLength(0)
    });
})
