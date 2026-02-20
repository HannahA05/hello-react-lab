const songs = [
  {
    id: 1,
    title: "Me and My Guitar",
    artist: "A Boogie Wit da Hoodie",
    explicit: false
  },
  {
    id: 2,
    title: "E85",
    artist: "Don Toliver",
    explicit: true
  },
  {
    id: 3,
    title: "Holy Ghost",
    artist: "The Neighbourhood",
    explicit: false
  }
];

function SongList() {
  return (
    <div>
      <h2>Song List</h2>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            {song.title} – {song.artist}{" "}
            {song.explicit ? (
              <span className="explicit">Explicit</span>
            ) : (
              <span className="clean">Clean</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;