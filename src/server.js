require("dotenv").config();

const Hapi = require("@hapi/hapi");

// albums
const albums = require("./api/albums");
const AlbumsService = require("./services/postgres/AlbumsServices");
const AlbumsValidator = require("./validator/albums");

// songs
const songs = require("./api/songs");
const SongsService = require("./services/postgres/SongsServices");
const SongsValidator = require("./validator/songs");

const init = async () => {
  const albumsService = new AlbumsService();
  const songsService = new SongsService();

  const server = Hapi.server({
    // port: 5000,
    // host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  await server.register([
    {
      plugin: songs,
      options: {
        service: songsService,
        validator: SongsValidator,
      },
    },
    {
      plugin: albums,
      options: {
        service: albumsService,
        validator: AlbumsValidator,
      },
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
