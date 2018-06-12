import { GraphQLClient } from 'graphql-request';
import * as ip from 'ip';
import { SongConnection } from '../../generated/prisma';

const client = new GraphQLClient('http://localhost:4000');
jest.setTimeout(50000);

const SONGS_QUERY = `
    query songs {
      songs {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;

describe('Error check song queries', () => {
    test('songs should return empty array', async () => {
        const { songs: { edges } } = await client.request<songs: SongConnection}>(SONGS_QUERY);
        expect(edges).toHaveLength(0)
    });
})
