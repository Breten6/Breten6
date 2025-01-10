import React, { createContext, useState, useRef } from "react";

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playMode, setPlayMode] = useState("normal"); // "normal", "repeat-one", "shuffle"
  const audioRef = useRef(null);
  const [shuffledPlaylist, setShuffledPlaylist] = useState([]);

  const generateShuffledPlaylist = () => {
    if (playlist.length > 0 && currentSong) {
      const newShuffledPlaylist = [...playlist];
      const currentSongIndex = newShuffledPlaylist.findIndex(
        (song) => song.id === currentSong.id
      );
      if (currentSongIndex > -1) {
        const [current] = newShuffledPlaylist.splice(currentSongIndex, 1);
        newShuffledPlaylist.unshift(current);
      }
      for (let i = newShuffledPlaylist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newShuffledPlaylist[i], newShuffledPlaylist[j]] = [
          newShuffledPlaylist[j],
          newShuffledPlaylist[i],
        ];
      }
      return newShuffledPlaylist;
    }
    return [];
  };

  const playNext = () => {
    if (playlist.length > 0) {
      if (playMode === "shuffle") {
        if (shuffledPlaylist.length === 0) return;
        const nextIndex = (currentIndex + 1) % shuffledPlaylist.length;
        setCurrentIndex(nextIndex);
        setCurrentSong(shuffledPlaylist[nextIndex]);
      } else if (playMode === "repeat-one") {
        if (currentSong) {
          setCurrentSong(currentSong);
        }
      } else {
        if (currentIndex < playlist.length - 1) {
          const nextIndex = currentIndex + 1;
          setCurrentIndex(nextIndex);
          setCurrentSong(playlist[nextIndex]);
        } else {
          setCurrentIndex(0);
          setCurrentSong(playlist[0]);
        }
      }
      setIsPlaying(true);
    }
  };

  const playPrevious = () => {
    if (playlist.length > 0) {
      if (playMode === "repeat-one") {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          setCurrentSong(currentSong);
        }
      } else if (playMode === "shuffle") {
        if (audioRef.current && audioRef.current.currentTime > 5) {
          audioRef.current.currentTime = 0;
        } else {
          if (shuffledPlaylist.length === 0) return;
          const previousIndex =
            (currentIndex - 1 + shuffledPlaylist.length) %
            shuffledPlaylist.length;
          setCurrentIndex(previousIndex);
          setCurrentSong(shuffledPlaylist[previousIndex]);
        }
      } else { // normal
        if (audioRef.current) {
          if (audioRef.current.currentTime > 5) {
            audioRef.current.currentTime = 0;
          } else if (currentIndex > 0) {
            const previousIndex = currentIndex - 1;
            setCurrentIndex(previousIndex);
            setCurrentSong(playlist[previousIndex]);
          } else { 
            audioRef.current.currentTime = 0;
            setCurrentIndex(0);
            setCurrentSong(playlist[0]);
          }
        }
      }
      setIsPlaying(true);
    }
  };

  const setPlayModeWithShuffle = (mode) => {
    if (mode === "shuffle") {
      const newShuffledPlaylist = generateShuffledPlaylist();
      setShuffledPlaylist(newShuffledPlaylist);
      if (newShuffledPlaylist.length > 0) {
        setCurrentIndex(0);
        setIsPlaying(true);
      }
    } else {
      setShuffledPlaylist([]);
      if (currentSong) {
        const newIndex = playlist.findIndex((song) => song.id === currentSong.id);
        if (newIndex > -1) {
          setCurrentIndex(newIndex);
        }
      }
    }
    setPlayMode(mode);
  };

  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const resetPlayer = () => {
    setIsPlaying(false);
    setCurrentSong(null);
    setCurrentIndex(-1);
    setIsPlayerVisible(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        playlist,
        setPlaylist,
        currentSong,
        setCurrentSong,
        currentIndex,
        setCurrentIndex,
        setPlayMode: setPlayModeWithShuffle,
        shuffledPlaylist,
        isPlaying,
        setIsPlaying,
        isPlayerVisible,
        setIsPlayerVisible,
        playMode,
        playNext,
        playPrevious,
        resetPlayer,
        audioRef,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
