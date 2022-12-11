const mapDBToModelAlbums = ({ id, name, year }) => ({
  id,
  name,
  year,
});

const mapDBToModelSongs = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
});
const mapOptionalSong = ({ song_id, song_title, performer }) => ({
  id: song_id,
  title: song_title,
  performer,
});

module.exports = { mapDBToModelAlbums, mapDBToModelSongs, mapOptionalSong };
