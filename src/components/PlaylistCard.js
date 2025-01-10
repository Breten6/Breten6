import React, { useContext } from "react";
import { MusicPlayerContext } from "../MusicPlayerContext";

function PlaylistCard({ title, artist, cover, audio, index, playlist }) {
  const {
    currentSong,
    setCurrentSong,
    setPlaylist,
    setCurrentIndex,
    setIsPlaying,
    setIsPlayerVisible,
    isPlaying,
  } = useContext(MusicPlayerContext);

  const handlePlayPause = () => {
    if (currentSong?.audio === audio) {
      setIsPlaying(!isPlaying);
    } else {
      setPlaylist(playlist);
      setCurrentIndex(index);
      setCurrentSong({ title, artist, audio, cover });
      setIsPlaying(true);
      setIsPlayerVisible(true);
    }
  };

  return (
    <div className="playlist-card">
      <div className="card-image" onClick={handlePlayPause}>
        <img src={cover} alt={title} />
        <button className="play-button">
          {currentSong?.audio === audio && isPlaying ? "⏸" : "▶"}
        </button>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-artist">{artist}</p>
      </div>
    </div>
  );
}

export default PlaylistCard;
