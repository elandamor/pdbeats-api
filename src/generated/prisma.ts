import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    artists: <T = Artist[]>(args: { where?: ArtistWhereInput, orderBy?: ArtistOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    songs: <T = Song[]>(args: { where?: SongWhereInput, orderBy?: SongOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    albums: <T = Album[]>(args: { where?: AlbumWhereInput, orderBy?: AlbumOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    artist: <T = Artist | null>(args: { where: ArtistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    song: <T = Song | null>(args: { where: SongWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    album: <T = Album | null>(args: { where: AlbumWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    artistsConnection: <T = ArtistConnection>(args: { where?: ArtistWhereInput, orderBy?: ArtistOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    songsConnection: <T = SongConnection>(args: { where?: SongWhereInput, orderBy?: SongOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    albumsConnection: <T = AlbumConnection>(args: { where?: AlbumWhereInput, orderBy?: AlbumOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createArtist: <T = Artist>(args: { data: ArtistCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSong: <T = Song>(args: { data: SongCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAlbum: <T = Album>(args: { data: AlbumCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateArtist: <T = Artist | null>(args: { data: ArtistUpdateInput, where: ArtistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSong: <T = Song | null>(args: { data: SongUpdateInput, where: SongWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAlbum: <T = Album | null>(args: { data: AlbumUpdateInput, where: AlbumWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteArtist: <T = Artist | null>(args: { where: ArtistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSong: <T = Song | null>(args: { where: SongWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAlbum: <T = Album | null>(args: { where: AlbumWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertArtist: <T = Artist>(args: { where: ArtistWhereUniqueInput, create: ArtistCreateInput, update: ArtistUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSong: <T = Song>(args: { where: SongWhereUniqueInput, create: SongCreateInput, update: SongUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAlbum: <T = Album>(args: { where: AlbumWhereUniqueInput, create: AlbumCreateInput, update: AlbumUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyArtists: <T = BatchPayload>(args: { data: ArtistUpdateInput, where?: ArtistWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySongs: <T = BatchPayload>(args: { data: SongUpdateInput, where?: SongWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAlbums: <T = BatchPayload>(args: { data: AlbumUpdateInput, where?: AlbumWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyArtists: <T = BatchPayload>(args: { where?: ArtistWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySongs: <T = BatchPayload>(args: { where?: SongWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAlbums: <T = BatchPayload>(args: { where?: AlbumWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    artist: <T = ArtistSubscriptionPayload | null>(args: { where?: ArtistSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    song: <T = SongSubscriptionPayload | null>(args: { where?: SongSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    album: <T = AlbumSubscriptionPayload | null>(args: { where?: AlbumSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Artist: (where?: ArtistWhereInput) => Promise<boolean>
  Song: (where?: SongWhereInput) => Promise<boolean>
  Album: (where?: AlbumWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAlbum {
  count: Int!
}

type AggregateArtist {
  count: Int!
}

type AggregateSong {
  count: Int!
}

type Album implements Node {
  id: ID!
  alias: String!
  artist(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist!]
  name: String!
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type AlbumConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AlbumEdge]!
  aggregate: AggregateAlbum!
}

input AlbumCreateInput {
  alias: String!
  name: String!
  artist: ArtistCreateManyInput
  songs: SongCreateManyWithoutAlbumInput
}

input AlbumCreateOneWithoutSongsInput {
  create: AlbumCreateWithoutSongsInput
  connect: AlbumWhereUniqueInput
}

input AlbumCreateWithoutSongsInput {
  alias: String!
  name: String!
  artist: ArtistCreateManyInput
}

"""An edge in a connection."""
type AlbumEdge {
  """The item at the end of the edge."""
  node: Album!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AlbumOrderByInput {
  id_ASC
  id_DESC
  alias_ASC
  alias_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AlbumPreviousValues {
  id: ID!
  alias: String!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AlbumSubscriptionPayload {
  mutation: MutationType!
  node: Album
  updatedFields: [String!]
  previousValues: AlbumPreviousValues
}

input AlbumSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AlbumSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AlbumSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AlbumSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AlbumWhereInput
}

input AlbumUpdateInput {
  alias: String
  name: String
  artist: ArtistUpdateManyInput
  songs: SongUpdateManyWithoutAlbumInput
}

input AlbumUpdateOneWithoutSongsInput {
  create: AlbumCreateWithoutSongsInput
  connect: AlbumWhereUniqueInput
  delete: Boolean
  update: AlbumUpdateWithoutSongsDataInput
  upsert: AlbumUpsertWithoutSongsInput
}

input AlbumUpdateWithoutSongsDataInput {
  alias: String
  name: String
  artist: ArtistUpdateManyInput
}

input AlbumUpsertWithoutSongsInput {
  update: AlbumUpdateWithoutSongsDataInput!
  create: AlbumCreateWithoutSongsInput!
}

input AlbumWhereInput {
  """Logical AND on all given filters."""
  AND: [AlbumWhereInput!]

  """Logical OR on all given filters."""
  OR: [AlbumWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AlbumWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  alias: String

  """All values that are not equal to given value."""
  alias_not: String

  """All values that are contained in given list."""
  alias_in: [String!]

  """All values that are not contained in given list."""
  alias_not_in: [String!]

  """All values less than the given value."""
  alias_lt: String

  """All values less than or equal the given value."""
  alias_lte: String

  """All values greater than the given value."""
  alias_gt: String

  """All values greater than or equal the given value."""
  alias_gte: String

  """All values containing the given string."""
  alias_contains: String

  """All values not containing the given string."""
  alias_not_contains: String

  """All values starting with the given string."""
  alias_starts_with: String

  """All values not starting with the given string."""
  alias_not_starts_with: String

  """All values ending with the given string."""
  alias_ends_with: String

  """All values not ending with the given string."""
  alias_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  artist_every: ArtistWhereInput
  artist_some: ArtistWhereInput
  artist_none: ArtistWhereInput
  songs_every: SongWhereInput
  songs_some: SongWhereInput
  songs_none: SongWhereInput
}

input AlbumWhereUniqueInput {
  id: ID
  alias: String
}

type Artist implements Node {
  id: ID!
  alias: String!
  featuredIn(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song!]
  name: String!
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type ArtistConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ArtistEdge]!
  aggregate: AggregateArtist!
}

input ArtistCreateInput {
  alias: String!
  name: String!
  featuredIn: SongCreateManyWithoutFeaturingInput
  songs: SongCreateManyWithoutArtistInput
}

input ArtistCreateManyInput {
  create: [ArtistCreateInput!]
  connect: [ArtistWhereUniqueInput!]
}

input ArtistCreateManyWithoutFeaturedInInput {
  create: [ArtistCreateWithoutFeaturedInInput!]
  connect: [ArtistWhereUniqueInput!]
}

input ArtistCreateManyWithoutSongsInput {
  create: [ArtistCreateWithoutSongsInput!]
  connect: [ArtistWhereUniqueInput!]
}

input ArtistCreateWithoutFeaturedInInput {
  alias: String!
  name: String!
  songs: SongCreateManyWithoutArtistInput
}

input ArtistCreateWithoutSongsInput {
  alias: String!
  name: String!
  featuredIn: SongCreateManyWithoutFeaturingInput
}

"""An edge in a connection."""
type ArtistEdge {
  """The item at the end of the edge."""
  node: Artist!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ArtistOrderByInput {
  id_ASC
  id_DESC
  alias_ASC
  alias_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ArtistPreviousValues {
  id: ID!
  alias: String!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ArtistSubscriptionPayload {
  mutation: MutationType!
  node: Artist
  updatedFields: [String!]
  previousValues: ArtistPreviousValues
}

input ArtistSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ArtistSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ArtistSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ArtistSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ArtistWhereInput
}

input ArtistUpdateDataInput {
  alias: String
  name: String
  featuredIn: SongUpdateManyWithoutFeaturingInput
  songs: SongUpdateManyWithoutArtistInput
}

input ArtistUpdateInput {
  alias: String
  name: String
  featuredIn: SongUpdateManyWithoutFeaturingInput
  songs: SongUpdateManyWithoutArtistInput
}

input ArtistUpdateManyInput {
  create: [ArtistCreateInput!]
  connect: [ArtistWhereUniqueInput!]
  disconnect: [ArtistWhereUniqueInput!]
  delete: [ArtistWhereUniqueInput!]
  update: [ArtistUpdateWithWhereUniqueNestedInput!]
  upsert: [ArtistUpsertWithWhereUniqueNestedInput!]
}

input ArtistUpdateManyWithoutFeaturedInInput {
  create: [ArtistCreateWithoutFeaturedInInput!]
  connect: [ArtistWhereUniqueInput!]
  disconnect: [ArtistWhereUniqueInput!]
  delete: [ArtistWhereUniqueInput!]
  update: [ArtistUpdateWithWhereUniqueWithoutFeaturedInInput!]
  upsert: [ArtistUpsertWithWhereUniqueWithoutFeaturedInInput!]
}

input ArtistUpdateManyWithoutSongsInput {
  create: [ArtistCreateWithoutSongsInput!]
  connect: [ArtistWhereUniqueInput!]
  disconnect: [ArtistWhereUniqueInput!]
  delete: [ArtistWhereUniqueInput!]
  update: [ArtistUpdateWithWhereUniqueWithoutSongsInput!]
  upsert: [ArtistUpsertWithWhereUniqueWithoutSongsInput!]
}

input ArtistUpdateWithoutFeaturedInDataInput {
  alias: String
  name: String
  songs: SongUpdateManyWithoutArtistInput
}

input ArtistUpdateWithoutSongsDataInput {
  alias: String
  name: String
  featuredIn: SongUpdateManyWithoutFeaturingInput
}

input ArtistUpdateWithWhereUniqueNestedInput {
  where: ArtistWhereUniqueInput!
  data: ArtistUpdateDataInput!
}

input ArtistUpdateWithWhereUniqueWithoutFeaturedInInput {
  where: ArtistWhereUniqueInput!
  data: ArtistUpdateWithoutFeaturedInDataInput!
}

input ArtistUpdateWithWhereUniqueWithoutSongsInput {
  where: ArtistWhereUniqueInput!
  data: ArtistUpdateWithoutSongsDataInput!
}

input ArtistUpsertWithWhereUniqueNestedInput {
  where: ArtistWhereUniqueInput!
  update: ArtistUpdateDataInput!
  create: ArtistCreateInput!
}

input ArtistUpsertWithWhereUniqueWithoutFeaturedInInput {
  where: ArtistWhereUniqueInput!
  update: ArtistUpdateWithoutFeaturedInDataInput!
  create: ArtistCreateWithoutFeaturedInInput!
}

input ArtistUpsertWithWhereUniqueWithoutSongsInput {
  where: ArtistWhereUniqueInput!
  update: ArtistUpdateWithoutSongsDataInput!
  create: ArtistCreateWithoutSongsInput!
}

input ArtistWhereInput {
  """Logical AND on all given filters."""
  AND: [ArtistWhereInput!]

  """Logical OR on all given filters."""
  OR: [ArtistWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ArtistWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  alias: String

  """All values that are not equal to given value."""
  alias_not: String

  """All values that are contained in given list."""
  alias_in: [String!]

  """All values that are not contained in given list."""
  alias_not_in: [String!]

  """All values less than the given value."""
  alias_lt: String

  """All values less than or equal the given value."""
  alias_lte: String

  """All values greater than the given value."""
  alias_gt: String

  """All values greater than or equal the given value."""
  alias_gte: String

  """All values containing the given string."""
  alias_contains: String

  """All values not containing the given string."""
  alias_not_contains: String

  """All values starting with the given string."""
  alias_starts_with: String

  """All values not starting with the given string."""
  alias_not_starts_with: String

  """All values ending with the given string."""
  alias_ends_with: String

  """All values not ending with the given string."""
  alias_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  featuredIn_every: SongWhereInput
  featuredIn_some: SongWhereInput
  featuredIn_none: SongWhereInput
  songs_every: SongWhereInput
  songs_some: SongWhereInput
  songs_none: SongWhereInput
}

input ArtistWhereUniqueInput {
  id: ID
  alias: String
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createArtist(data: ArtistCreateInput!): Artist!
  createSong(data: SongCreateInput!): Song!
  createAlbum(data: AlbumCreateInput!): Album!
  updateArtist(data: ArtistUpdateInput!, where: ArtistWhereUniqueInput!): Artist
  updateSong(data: SongUpdateInput!, where: SongWhereUniqueInput!): Song
  updateAlbum(data: AlbumUpdateInput!, where: AlbumWhereUniqueInput!): Album
  deleteArtist(where: ArtistWhereUniqueInput!): Artist
  deleteSong(where: SongWhereUniqueInput!): Song
  deleteAlbum(where: AlbumWhereUniqueInput!): Album
  upsertArtist(where: ArtistWhereUniqueInput!, create: ArtistCreateInput!, update: ArtistUpdateInput!): Artist!
  upsertSong(where: SongWhereUniqueInput!, create: SongCreateInput!, update: SongUpdateInput!): Song!
  upsertAlbum(where: AlbumWhereUniqueInput!, create: AlbumCreateInput!, update: AlbumUpdateInput!): Album!
  updateManyArtists(data: ArtistUpdateInput!, where: ArtistWhereInput): BatchPayload!
  updateManySongs(data: SongUpdateInput!, where: SongWhereInput): BatchPayload!
  updateManyAlbums(data: AlbumUpdateInput!, where: AlbumWhereInput): BatchPayload!
  deleteManyArtists(where: ArtistWhereInput): BatchPayload!
  deleteManySongs(where: SongWhereInput): BatchPayload!
  deleteManyAlbums(where: AlbumWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  artists(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist]!
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song]!
  albums(where: AlbumWhereInput, orderBy: AlbumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Album]!
  artist(where: ArtistWhereUniqueInput!): Artist
  song(where: SongWhereUniqueInput!): Song
  album(where: AlbumWhereUniqueInput!): Album
  artistsConnection(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArtistConnection!
  songsConnection(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SongConnection!
  albumsConnection(where: AlbumWhereInput, orderBy: AlbumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AlbumConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Song implements Node {
  id: ID!
  artist(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist!]
  album(where: AlbumWhereInput): Album!
  featuring(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist!]
  title: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type SongConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SongEdge]!
  aggregate: AggregateSong!
}

input SongCreateInput {
  title: String!
  artist: ArtistCreateManyWithoutSongsInput
  album: AlbumCreateOneWithoutSongsInput!
  featuring: ArtistCreateManyWithoutFeaturedInInput
}

input SongCreateManyWithoutAlbumInput {
  create: [SongCreateWithoutAlbumInput!]
  connect: [SongWhereUniqueInput!]
}

input SongCreateManyWithoutArtistInput {
  create: [SongCreateWithoutArtistInput!]
  connect: [SongWhereUniqueInput!]
}

input SongCreateManyWithoutFeaturingInput {
  create: [SongCreateWithoutFeaturingInput!]
  connect: [SongWhereUniqueInput!]
}

input SongCreateWithoutAlbumInput {
  title: String!
  artist: ArtistCreateManyWithoutSongsInput
  featuring: ArtistCreateManyWithoutFeaturedInInput
}

input SongCreateWithoutArtistInput {
  title: String!
  album: AlbumCreateOneWithoutSongsInput!
  featuring: ArtistCreateManyWithoutFeaturedInInput
}

input SongCreateWithoutFeaturingInput {
  title: String!
  artist: ArtistCreateManyWithoutSongsInput
  album: AlbumCreateOneWithoutSongsInput!
}

"""An edge in a connection."""
type SongEdge {
  """The item at the end of the edge."""
  node: Song!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SongOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SongPreviousValues {
  id: ID!
  title: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SongSubscriptionPayload {
  mutation: MutationType!
  node: Song
  updatedFields: [String!]
  previousValues: SongPreviousValues
}

input SongSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SongSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SongSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SongSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SongWhereInput
}

input SongUpdateInput {
  title: String
  artist: ArtistUpdateManyWithoutSongsInput
  album: AlbumUpdateOneWithoutSongsInput
  featuring: ArtistUpdateManyWithoutFeaturedInInput
}

input SongUpdateManyWithoutAlbumInput {
  create: [SongCreateWithoutAlbumInput!]
  connect: [SongWhereUniqueInput!]
  disconnect: [SongWhereUniqueInput!]
  delete: [SongWhereUniqueInput!]
  update: [SongUpdateWithWhereUniqueWithoutAlbumInput!]
  upsert: [SongUpsertWithWhereUniqueWithoutAlbumInput!]
}

input SongUpdateManyWithoutArtistInput {
  create: [SongCreateWithoutArtistInput!]
  connect: [SongWhereUniqueInput!]
  disconnect: [SongWhereUniqueInput!]
  delete: [SongWhereUniqueInput!]
  update: [SongUpdateWithWhereUniqueWithoutArtistInput!]
  upsert: [SongUpsertWithWhereUniqueWithoutArtistInput!]
}

input SongUpdateManyWithoutFeaturingInput {
  create: [SongCreateWithoutFeaturingInput!]
  connect: [SongWhereUniqueInput!]
  disconnect: [SongWhereUniqueInput!]
  delete: [SongWhereUniqueInput!]
  update: [SongUpdateWithWhereUniqueWithoutFeaturingInput!]
  upsert: [SongUpsertWithWhereUniqueWithoutFeaturingInput!]
}

input SongUpdateWithoutAlbumDataInput {
  title: String
  artist: ArtistUpdateManyWithoutSongsInput
  featuring: ArtistUpdateManyWithoutFeaturedInInput
}

input SongUpdateWithoutArtistDataInput {
  title: String
  album: AlbumUpdateOneWithoutSongsInput
  featuring: ArtistUpdateManyWithoutFeaturedInInput
}

input SongUpdateWithoutFeaturingDataInput {
  title: String
  artist: ArtistUpdateManyWithoutSongsInput
  album: AlbumUpdateOneWithoutSongsInput
}

input SongUpdateWithWhereUniqueWithoutAlbumInput {
  where: SongWhereUniqueInput!
  data: SongUpdateWithoutAlbumDataInput!
}

input SongUpdateWithWhereUniqueWithoutArtistInput {
  where: SongWhereUniqueInput!
  data: SongUpdateWithoutArtistDataInput!
}

input SongUpdateWithWhereUniqueWithoutFeaturingInput {
  where: SongWhereUniqueInput!
  data: SongUpdateWithoutFeaturingDataInput!
}

input SongUpsertWithWhereUniqueWithoutAlbumInput {
  where: SongWhereUniqueInput!
  update: SongUpdateWithoutAlbumDataInput!
  create: SongCreateWithoutAlbumInput!
}

input SongUpsertWithWhereUniqueWithoutArtistInput {
  where: SongWhereUniqueInput!
  update: SongUpdateWithoutArtistDataInput!
  create: SongCreateWithoutArtistInput!
}

input SongUpsertWithWhereUniqueWithoutFeaturingInput {
  where: SongWhereUniqueInput!
  update: SongUpdateWithoutFeaturingDataInput!
  create: SongCreateWithoutFeaturingInput!
}

input SongWhereInput {
  """Logical AND on all given filters."""
  AND: [SongWhereInput!]

  """Logical OR on all given filters."""
  OR: [SongWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SongWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  artist_every: ArtistWhereInput
  artist_some: ArtistWhereInput
  artist_none: ArtistWhereInput
  album: AlbumWhereInput
  featuring_every: ArtistWhereInput
  featuring_some: ArtistWhereInput
  featuring_none: ArtistWhereInput
}

input SongWhereUniqueInput {
  id: ID
}

type Subscription {
  artist(where: ArtistSubscriptionWhereInput): ArtistSubscriptionPayload
  song(where: SongSubscriptionWhereInput): SongSubscriptionPayload
  album(where: AlbumSubscriptionWhereInput): AlbumSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ArtistOrderByInput =   'id_ASC' |
  'id_DESC' |
  'alias_ASC' |
  'alias_DESC' |
  'name_ASC' |
  'name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type SongOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type AlbumOrderByInput =   'id_ASC' |
  'id_DESC' |
  'alias_ASC' |
  'alias_DESC' |
  'name_ASC' |
  'name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface SongCreateWithoutAlbumInput {
  title: String
  artist?: ArtistCreateManyWithoutSongsInput
  featuring?: ArtistCreateManyWithoutFeaturedInInput
}

export interface ArtistWhereInput {
  AND?: ArtistWhereInput[] | ArtistWhereInput
  OR?: ArtistWhereInput[] | ArtistWhereInput
  NOT?: ArtistWhereInput[] | ArtistWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  alias?: String
  alias_not?: String
  alias_in?: String[] | String
  alias_not_in?: String[] | String
  alias_lt?: String
  alias_lte?: String
  alias_gt?: String
  alias_gte?: String
  alias_contains?: String
  alias_not_contains?: String
  alias_starts_with?: String
  alias_not_starts_with?: String
  alias_ends_with?: String
  alias_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  featuredIn_every?: SongWhereInput
  featuredIn_some?: SongWhereInput
  featuredIn_none?: SongWhereInput
  songs_every?: SongWhereInput
  songs_some?: SongWhereInput
  songs_none?: SongWhereInput
}

export interface SongUpdateWithWhereUniqueWithoutFeaturingInput {
  where: SongWhereUniqueInput
  data: SongUpdateWithoutFeaturingDataInput
}

export interface AlbumWhereInput {
  AND?: AlbumWhereInput[] | AlbumWhereInput
  OR?: AlbumWhereInput[] | AlbumWhereInput
  NOT?: AlbumWhereInput[] | AlbumWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  alias?: String
  alias_not?: String
  alias_in?: String[] | String
  alias_not_in?: String[] | String
  alias_lt?: String
  alias_lte?: String
  alias_gt?: String
  alias_gte?: String
  alias_contains?: String
  alias_not_contains?: String
  alias_starts_with?: String
  alias_not_starts_with?: String
  alias_ends_with?: String
  alias_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  artist_every?: ArtistWhereInput
  artist_some?: ArtistWhereInput
  artist_none?: ArtistWhereInput
  songs_every?: SongWhereInput
  songs_some?: SongWhereInput
  songs_none?: SongWhereInput
}

export interface ArtistCreateManyInput {
  create?: ArtistCreateInput[] | ArtistCreateInput
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
}

export interface ArtistUpdateManyWithoutFeaturedInInput {
  create?: ArtistCreateWithoutFeaturedInInput[] | ArtistCreateWithoutFeaturedInInput
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  disconnect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  delete?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  update?: ArtistUpdateWithWhereUniqueWithoutFeaturedInInput[] | ArtistUpdateWithWhereUniqueWithoutFeaturedInInput
  upsert?: ArtistUpsertWithWhereUniqueWithoutFeaturedInInput[] | ArtistUpsertWithWhereUniqueWithoutFeaturedInInput
}

export interface SongCreateManyWithoutArtistInput {
  create?: SongCreateWithoutArtistInput[] | SongCreateWithoutArtistInput
  connect?: SongWhereUniqueInput[] | SongWhereUniqueInput
}

export interface SongUpdateWithoutFeaturingDataInput {
  title?: String
  artist?: ArtistUpdateManyWithoutSongsInput
  album?: AlbumUpdateOneWithoutSongsInput
}

export interface SongCreateWithoutArtistInput {
  title: String
  album: AlbumCreateOneWithoutSongsInput
  featuring?: ArtistCreateManyWithoutFeaturedInInput
}

export interface AlbumSubscriptionWhereInput {
  AND?: AlbumSubscriptionWhereInput[] | AlbumSubscriptionWhereInput
  OR?: AlbumSubscriptionWhereInput[] | AlbumSubscriptionWhereInput
  NOT?: AlbumSubscriptionWhereInput[] | AlbumSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AlbumWhereInput
}

export interface ArtistCreateManyWithoutFeaturedInInput {
  create?: ArtistCreateWithoutFeaturedInInput[] | ArtistCreateWithoutFeaturedInInput
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
}

export interface ArtistSubscriptionWhereInput {
  AND?: ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput
  OR?: ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput
  NOT?: ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ArtistWhereInput
}

export interface ArtistCreateWithoutFeaturedInInput {
  alias: String
  name: String
  songs?: SongCreateManyWithoutArtistInput
}

export interface SongWhereUniqueInput {
  id?: ID_Input
}

export interface SongCreateInput {
  title: String
  artist?: ArtistCreateManyWithoutSongsInput
  album: AlbumCreateOneWithoutSongsInput
  featuring?: ArtistCreateManyWithoutFeaturedInInput
}

export interface SongUpsertWithWhereUniqueWithoutAlbumInput {
  where: SongWhereUniqueInput
  update: SongUpdateWithoutAlbumDataInput
  create: SongCreateWithoutAlbumInput
}

export interface AlbumCreateInput {
  alias: String
  name: String
  artist?: ArtistCreateManyInput
  songs?: SongCreateManyWithoutAlbumInput
}

export interface SongUpdateWithWhereUniqueWithoutAlbumInput {
  where: SongWhereUniqueInput
  data: SongUpdateWithoutAlbumDataInput
}

export interface SongCreateManyWithoutAlbumInput {
  create?: SongCreateWithoutAlbumInput[] | SongCreateWithoutAlbumInput
  connect?: SongWhereUniqueInput[] | SongWhereUniqueInput
}

export interface AlbumUpdateInput {
  alias?: String
  name?: String
  artist?: ArtistUpdateManyInput
  songs?: SongUpdateManyWithoutAlbumInput
}

export interface ArtistUpdateWithoutFeaturedInDataInput {
  alias?: String
  name?: String
  songs?: SongUpdateManyWithoutArtistInput
}

export interface SongUpsertWithWhereUniqueWithoutFeaturingInput {
  where: SongWhereUniqueInput
  update: SongUpdateWithoutFeaturingDataInput
  create: SongCreateWithoutFeaturingInput
}

export interface ArtistUpdateInput {
  alias?: String
  name?: String
  featuredIn?: SongUpdateManyWithoutFeaturingInput
  songs?: SongUpdateManyWithoutArtistInput
}

export interface ArtistUpsertWithWhereUniqueNestedInput {
  where: ArtistWhereUniqueInput
  update: ArtistUpdateDataInput
  create: ArtistCreateInput
}

export interface SongUpdateManyWithoutFeaturingInput {
  create?: SongCreateWithoutFeaturingInput[] | SongCreateWithoutFeaturingInput
  connect?: SongWhereUniqueInput[] | SongWhereUniqueInput
  disconnect?: SongWhereUniqueInput[] | SongWhereUniqueInput
  delete?: SongWhereUniqueInput[] | SongWhereUniqueInput
  update?: SongUpdateWithWhereUniqueWithoutFeaturingInput[] | SongUpdateWithWhereUniqueWithoutFeaturingInput
  upsert?: SongUpsertWithWhereUniqueWithoutFeaturingInput[] | SongUpsertWithWhereUniqueWithoutFeaturingInput
}

export interface ArtistUpsertWithWhereUniqueWithoutFeaturedInInput {
  where: ArtistWhereUniqueInput
  update: ArtistUpdateWithoutFeaturedInDataInput
  create: ArtistCreateWithoutFeaturedInInput
}

export interface ArtistUpdateWithWhereUniqueWithoutFeaturedInInput {
  where: ArtistWhereUniqueInput
  data: ArtistUpdateWithoutFeaturedInDataInput
}

export interface SongCreateManyWithoutFeaturingInput {
  create?: SongCreateWithoutFeaturingInput[] | SongCreateWithoutFeaturingInput
  connect?: SongWhereUniqueInput[] | SongWhereUniqueInput
}

export interface ArtistCreateManyWithoutSongsInput {
  create?: ArtistCreateWithoutSongsInput[] | ArtistCreateWithoutSongsInput
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
}

export interface AlbumCreateOneWithoutSongsInput {
  create?: AlbumCreateWithoutSongsInput
  connect?: AlbumWhereUniqueInput
}

export interface ArtistUpdateManyWithoutSongsInput {
  create?: ArtistCreateWithoutSongsInput[] | ArtistCreateWithoutSongsInput
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  disconnect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  delete?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  update?: ArtistUpdateWithWhereUniqueWithoutSongsInput[] | ArtistUpdateWithWhereUniqueWithoutSongsInput
  upsert?: ArtistUpsertWithWhereUniqueWithoutSongsInput[] | ArtistUpsertWithWhereUniqueWithoutSongsInput
}

export interface SongWhereInput {
  AND?: SongWhereInput[] | SongWhereInput
  OR?: SongWhereInput[] | SongWhereInput
  NOT?: SongWhereInput[] | SongWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  artist_every?: ArtistWhereInput
  artist_some?: ArtistWhereInput
  artist_none?: ArtistWhereInput
  album?: AlbumWhereInput
  featuring_every?: ArtistWhereInput
  featuring_some?: ArtistWhereInput
  featuring_none?: ArtistWhereInput
}

export interface ArtistUpdateWithWhereUniqueWithoutSongsInput {
  where: ArtistWhereUniqueInput
  data: ArtistUpdateWithoutSongsDataInput
}

export interface ArtistWhereUniqueInput {
  id?: ID_Input
  alias?: String
}

export interface ArtistUpdateWithoutSongsDataInput {
  alias?: String
  name?: String
  featuredIn?: SongUpdateManyWithoutFeaturingInput
}

export interface SongUpdateWithoutAlbumDataInput {
  title?: String
  artist?: ArtistUpdateManyWithoutSongsInput
  featuring?: ArtistUpdateManyWithoutFeaturedInInput
}

export interface ArtistUpsertWithWhereUniqueWithoutSongsInput {
  where: ArtistWhereUniqueInput
  update: ArtistUpdateWithoutSongsDataInput
  create: ArtistCreateWithoutSongsInput
}

export interface SongUpdateInput {
  title?: String
  artist?: ArtistUpdateManyWithoutSongsInput
  album?: AlbumUpdateOneWithoutSongsInput
  featuring?: ArtistUpdateManyWithoutFeaturedInInput
}

export interface AlbumUpdateOneWithoutSongsInput {
  create?: AlbumCreateWithoutSongsInput
  connect?: AlbumWhereUniqueInput
  delete?: Boolean
  update?: AlbumUpdateWithoutSongsDataInput
  upsert?: AlbumUpsertWithoutSongsInput
}

export interface SongUpsertWithWhereUniqueWithoutArtistInput {
  where: SongWhereUniqueInput
  update: SongUpdateWithoutArtistDataInput
  create: SongCreateWithoutArtistInput
}

export interface AlbumUpdateWithoutSongsDataInput {
  alias?: String
  name?: String
  artist?: ArtistUpdateManyInput
}

export interface SongCreateWithoutFeaturingInput {
  title: String
  artist?: ArtistCreateManyWithoutSongsInput
  album: AlbumCreateOneWithoutSongsInput
}

export interface ArtistUpdateManyInput {
  create?: ArtistCreateInput[] | ArtistCreateInput
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  disconnect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  delete?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput
  update?: ArtistUpdateWithWhereUniqueNestedInput[] | ArtistUpdateWithWhereUniqueNestedInput
  upsert?: ArtistUpsertWithWhereUniqueNestedInput[] | ArtistUpsertWithWhereUniqueNestedInput
}

export interface AlbumCreateWithoutSongsInput {
  alias: String
  name: String
  artist?: ArtistCreateManyInput
}

export interface ArtistUpdateWithWhereUniqueNestedInput {
  where: ArtistWhereUniqueInput
  data: ArtistUpdateDataInput
}

export interface AlbumWhereUniqueInput {
  id?: ID_Input
  alias?: String
}

export interface SongUpdateWithoutArtistDataInput {
  title?: String
  album?: AlbumUpdateOneWithoutSongsInput
  featuring?: ArtistUpdateManyWithoutFeaturedInInput
}

export interface SongUpdateWithWhereUniqueWithoutArtistInput {
  where: SongWhereUniqueInput
  data: SongUpdateWithoutArtistDataInput
}

export interface SongUpdateManyWithoutArtistInput {
  create?: SongCreateWithoutArtistInput[] | SongCreateWithoutArtistInput
  connect?: SongWhereUniqueInput[] | SongWhereUniqueInput
  disconnect?: SongWhereUniqueInput[] | SongWhereUniqueInput
  delete?: SongWhereUniqueInput[] | SongWhereUniqueInput
  update?: SongUpdateWithWhereUniqueWithoutArtistInput[] | SongUpdateWithWhereUniqueWithoutArtistInput
  upsert?: SongUpsertWithWhereUniqueWithoutArtistInput[] | SongUpsertWithWhereUniqueWithoutArtistInput
}

export interface ArtistUpdateDataInput {
  alias?: String
  name?: String
  featuredIn?: SongUpdateManyWithoutFeaturingInput
  songs?: SongUpdateManyWithoutArtistInput
}

export interface SongUpdateManyWithoutAlbumInput {
  create?: SongCreateWithoutAlbumInput[] | SongCreateWithoutAlbumInput
  connect?: SongWhereUniqueInput[] | SongWhereUniqueInput
  disconnect?: SongWhereUniqueInput[] | SongWhereUniqueInput
  delete?: SongWhereUniqueInput[] | SongWhereUniqueInput
  update?: SongUpdateWithWhereUniqueWithoutAlbumInput[] | SongUpdateWithWhereUniqueWithoutAlbumInput
  upsert?: SongUpsertWithWhereUniqueWithoutAlbumInput[] | SongUpsertWithWhereUniqueWithoutAlbumInput
}

export interface SongSubscriptionWhereInput {
  AND?: SongSubscriptionWhereInput[] | SongSubscriptionWhereInput
  OR?: SongSubscriptionWhereInput[] | SongSubscriptionWhereInput
  NOT?: SongSubscriptionWhereInput[] | SongSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SongWhereInput
}

export interface ArtistCreateWithoutSongsInput {
  alias: String
  name: String
  featuredIn?: SongCreateManyWithoutFeaturingInput
}

export interface ArtistCreateInput {
  alias: String
  name: String
  featuredIn?: SongCreateManyWithoutFeaturingInput
  songs?: SongCreateManyWithoutArtistInput
}

export interface AlbumUpsertWithoutSongsInput {
  update: AlbumUpdateWithoutSongsDataInput
  create: AlbumCreateWithoutSongsInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AlbumPreviousValues {
  id: ID_Output
  alias: String
  name: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ArtistConnection {
  pageInfo: PageInfo
  edges: ArtistEdge[]
  aggregate: AggregateArtist
}

export interface Artist extends Node {
  id: ID_Output
  alias: String
  featuredIn?: Song[]
  name: String
  songs?: Song[]
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BatchPayload {
  count: Long
}

export interface AggregateAlbum {
  count: Int
}

export interface Song extends Node {
  id: ID_Output
  artist?: Artist[]
  album: Album
  featuring?: Artist[]
  title: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface Album extends Node {
  id: ID_Output
  alias: String
  artist?: Artist[]
  name: String
  songs?: Song[]
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface AlbumEdge {
  node: Album
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface AlbumConnection {
  pageInfo: PageInfo
  edges: AlbumEdge[]
  aggregate: AggregateAlbum
}

export interface AggregateSong {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface SongConnection {
  pageInfo: PageInfo
  edges: SongEdge[]
  aggregate: AggregateSong
}

/*
 * An edge in a connection.

 */
export interface ArtistEdge {
  node: Artist
  cursor: String
}

export interface ArtistPreviousValues {
  id: ID_Output
  alias: String
  name: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface ArtistSubscriptionPayload {
  mutation: MutationType
  node?: Artist
  updatedFields?: String[]
  previousValues?: ArtistPreviousValues
}

export interface SongSubscriptionPayload {
  mutation: MutationType
  node?: Song
  updatedFields?: String[]
  previousValues?: SongPreviousValues
}

export interface SongPreviousValues {
  id: ID_Output
  title: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AlbumSubscriptionPayload {
  mutation: MutationType
  node?: Album
  updatedFields?: String[]
  previousValues?: AlbumPreviousValues
}

export interface AggregateArtist {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface SongEdge {
  node: Song
  cursor: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string