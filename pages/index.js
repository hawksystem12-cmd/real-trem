import { useState, useRef } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const audioRef = useRef(null);
  const bassRef = useRef(null);

  const searchMusic = async () => {
    if (!query) return;
    const res = await fetch(`https://api.deezer.com/search?q=${query}`);
    const data = await res.json();
    setResults(data.data);
  };

  const playMusic = (preview) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(preview);
    audioRef.current = audio;

    const context = new (window.AudioContext || window.webkitAudioContext)();
    const source = context.createMediaElementSource(audio);
    const bass = context.createBiquadFilter();

    bass.type = "lowshelf";
    bass.frequency.value = 200;
    bass.gain.value = 0;

    bassRef.current = bass;

    source.connect(bass);
    bass.connect(context.destination);

    audio.play();
  };

  const toggleBass = () => {
    if (!bassRef.current) return;
    bassRef.current.gain.value = bassRef.current.gain.value === 0 ? 15 : 0;
  };

  return (
    <div className="container">
      <h1>Sua música favorita está no</h1>
      <h1 className="highlight">SILVEIRA MÚSICAS</h1>

      <div className="search-box">
        <input
          placeholder="Buscar música..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMusic}>Buscar</button>
      </div>

      <div>
        {results && results.map((music) => (
          <div key={music.id} className="card">
            <img src={music.album.cover_medium} width="100" />
            <p><strong>{music.title}</strong></p>
            <p>{music.artist.name}</p>
            <button onClick={() => playMusic(music.preview)}>Play</button>
            <button onClick={toggleBass}>Grave ON/OFF</button>
          </div>
        ))}
      </div>
    </div>
  );
}
