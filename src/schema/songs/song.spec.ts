import { GraphQLClient } from 'graphql-request';
import { SongConnection } from '../../generated/prisma';

const client = new GraphQLClient('http://localhost:4000');
jest.setTimeout(50000);

const SONGS_QUERY = `
    query songs {
      music {
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
`;

describe('Error check song queries', () => {
  test('music should be defined', async () => {
    const music = await client.request<SongConnection>(SONGS_QUERY);
    expect(music).toBeDefined();
  });
});
