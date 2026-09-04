const songs = [

  {
    title: "",
    artist: "",
    lyrics: ""
  },

  

];

const songList = document.getElementById("song-list");

songs.forEach(song => {

  const card = document.createElement("div");

  card.className = "song-card";

  card.innerHTML = `
    <div class="song-title">
      ${song.title}
    </div>

    <div class="song-artist">
      ${song.artist}
    </div>

    <a
      href="${song.lyrics}"
      target="_blank"
      rel="見る
    </a>
  `;

  songList.appendChild(card);

});
