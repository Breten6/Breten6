import React, { useContext, useEffect, useRef, useState } from "react";
import { MusicPlayerContext } from "./MusicPlayerContext";

function MusicPlayer() {
  const {
    currentSong,
    isPlaying,
    setIsPlaying,
    playNext,
    playPrevious,
    playMode,
    setPlayMode,
    isPlayerVisible,
    resetPlayer,
    audioRef,
  } = useContext(MusicPlayerContext);

  // const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong, isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && !isDragging) {
      const currentTime = audioRef.current.currentTime;
      const totalDuration = audioRef.current.duration;
      setProgress(currentTime / totalDuration);
      setDuration(totalDuration);
    }
  };

  const handleSeek = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
  };

  const handleSeekStart = () => {
    setIsDragging(true);
    if (isPlaying) {
      audioRef.current.pause();
    }
  };

  const handleSeekEnd = () => {
    setIsDragging(false);
    audioRef.current.currentTime = progress * duration;
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const togglePlayMode = () => {
    if (playMode === "normal") {
      setPlayMode("shuffle");
    } else if (playMode === "shuffle") {
      setPlayMode("repeat-one");
    } else {
      setPlayMode("normal");
    }
  };  

  const handleNext = () => {
    if (playMode === "repeat-one") {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else {
      playNext();
    }
  };
  
  if (!isPlayerVisible) return null; 
  return (
    <div className="music-player">
      <button onClick={resetPlayer} className="close-button">
        ✖
      </button>
      {currentSong ? (
        <>
          <div className="song-info">
            <img src={currentSong.cover} alt="Album Cover" />
            <div>
              <h4>{currentSong.title}</h4>
              <p>{currentSong.artist}</p>
            </div>
          </div>
          <div className="progress-container">
            <span>{formatTime(progress * duration)}</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={progress}
              onChange={handleSeek}
              onMouseDown={handleSeekStart}
              onMouseUp={handleSeekEnd}
            />
            <span>{formatTime(duration)}</span>
          </div>
          <div className="controls">
            <button onClick={playPrevious} className="control-button">⏮</button>
            <button onClick={togglePlayPause} className="control-button">
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button onClick={handleNext} className="control-button">⏭</button>
            <button onClick={togglePlayMode} className="control-button">
              {playMode === "normal" && "🔁"}
              {playMode === "repeat-one" && "🔂"}
              {playMode === "shuffle" && "🔀"}
            </button>
          </div>
          <audio
            ref={audioRef}
            src={currentSong.audio}
            onTimeUpdate={handleTimeUpdate}
            onEnded={playNext}
          />
        </>
      ) : (
        <p>No song selected</p>
      )}
    </div>
  );
}

export default MusicPlayer;
