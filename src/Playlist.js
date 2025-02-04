import React from "react";
import PlaylistCard from "./components/PlaylistCard";
import "./About.css"
const playlist = [
  {
    id: 1,
    title: "Beethoven's Piano Sonata No. 8, Pathetique",
    artist: "Hiromi",
    cover: process.env.PUBLIC_URL+"/covers/Voice.png",
    audio: process.env.PUBLIC_URL+"/audios/Beethoven's Piano Sonata No. 8, Pathetique.mp3",
  },
  {
    id: 2,
    title: "Everything's Beautiful",
    artist: "Hiatus Kaiyote",
    cover: process.env.PUBLIC_URL+"/covers/LHCC.png",
    audio: process.env.PUBLIC_URL+"/audios/Everything's Beautiful.mp3",
  },
  {
    id: 3,
    title: "A Desert Of Human",
    artist: "toe",
    cover: process.env.PUBLIC_URL+"/covers/Hear You.png",
    audio: process.env.PUBLIC_URL+"/audios/A Desert Of Human.mp3",
  },
  {
    id: 4,
    title: "El lugar correcto",
    artist: "Natalia Lafourcade",
    cover: process.env.PUBLIC_URL+"/covers/DTLF.png",
    audio: process.env.PUBLIC_URL+"/audios/El lugar correcto.mp3",
  },
  {
    id: 5,
    title: "任我行",
    artist: "Eason Chen",
    cover: process.env.PUBLIC_URL+"/covers/renwoxing.webp",
    audio: process.env.PUBLIC_URL+"/audios/renwoxing.mp3",
  },
  {
    id: 6,
    title: "15 Step",
    artist: "Radiohead",
    cover: process.env.PUBLIC_URL+"/covers/In Rainbows.png",
    audio: process.env.PUBLIC_URL+"/audios/15 Step.mp3",
  },
  {
    id: 7,
    title: "苦瓜",
    artist: "Eason Chen",
    cover: process.env.PUBLIC_URL+"/covers/kugua.jpeg",
    audio: process.env.PUBLIC_URL+"/audios/kugua.mp3",
  },
  {
    id: 8,
    title: "Crust",
    artist: "Flying Lotus",
    cover: process.env.PUBLIC_URL+"/covers/Yasuke.png",
    audio: process.env.PUBLIC_URL+"/audios/Crust.mp3",
  },
  {
    id: 9,
    title: "All You Need is Love",
    artist: "the Beatles",
    cover: process.env.PUBLIC_URL+"/covers/1.png",
    audio: process.env.PUBLIC_URL+"/audios/All You Need Is Love (Remastered 2009).mp3",
  },
  {
    id: 10,
    title: "哈雪大冒险",
    artist: "Dark bar read second p",
    cover: process.env.PUBLIC_URL+"/covers/haxue.png",
    audio: process.env.PUBLIC_URL+"/audios/haxue.wav",
  },
  {
    id: 11,
    title: "Bury the Light",
    artist: "Edwards Archive",
    cover: process.env.PUBLIC_URL+"/covers/DMC5.png",
    audio: process.env.PUBLIC_URL+"/audios/Bury the Light.mp3",
  },
  {
    id: 12,
    title: "99.974℃",
    artist: "Tricot",
    cover: process.env.PUBLIC_URL+"/covers/99974.png",
    audio: process.env.PUBLIC_URL+"/audios/99.974℃.mp3",
  },
  {
    id: 13,
    title: "Bury the Light",
    artist: "Edwards Archive",
    cover: process.env.PUBLIC_URL+"/covers/DMC5.png",
    audio: process.env.PUBLIC_URL+"/audios/Bury the Light.mp3",
  },
  {
    id: 14,
    title: "SWEET | I THOUGHT YOU WANTED TO DANCE",
    artist: "Tyler, The Creator",
    cover: process.env.PUBLIC_URL+"/covers/CMIYGL.png",
    audio: process.env.PUBLIC_URL+"/audios/SWEET  I THOUGHT YOU WANTED TO DANCE.mp3",
  },
  {
    id: 15,
    title: "Rosies",
    artist: "Feed Me Jack",
    cover: process.env.PUBLIC_URL+"/covers/chumpfrey.png",
    audio: process.env.PUBLIC_URL+"/audios/Rosies.mp3",
  },
  {
    id: 16,
    title: "Lunch",
    artist: "My Little Airport",
    cover: process.env.PUBLIC_URL+"/covers/Lunch.png",
    audio: process.env.PUBLIC_URL+"/audios/Lunch.mp3",
  },
  {
    id: 17,
    title: "My little Wish",
    artist: "toe",
    cover: process.env.PUBLIC_URL+"/covers/Hear You.png",
    audio: process.env.PUBLIC_URL+"/audios/My little Wish.mp3",
  },
  {
    id: 18,
    title: "达尔文",
    artist: "JJ Lin",
    cover: process.env.PUBLIC_URL+"/covers/JJcafe.png",
    audio: process.env.PUBLIC_URL+"/audios/達爾文.mp3",
  },
  {
    id: 19,
    title: "Bury the Light",
    artist: "Edwards Archive",
    cover: process.env.PUBLIC_URL+"/covers/DMC5.png",
    audio: process.env.PUBLIC_URL+"/audios/Bury the Light.mp3",
  },
  {
    id: 20,
    title: "日出東方 唯我不敗",
    artist: "Tzusing",
    cover: process.env.PUBLIC_URL+"/covers/DFBB.png",
    audio: process.env.PUBLIC_URL+"/audios/日出東方 唯我不敗.mp3",
  },
  {
    id: 21,
    title: "The Choice is Yours (Sorcerian Utility Disk Vol.1)",
    artist: "Falcom Sound Team JDK",
    cover: process.env.PUBLIC_URL+"/covers/SSAV.png",
    audio: process.env.PUBLIC_URL+"/audios/The Choice is Yours (Sorcerian Utility Disk Vol.1).mp3",
  },
  {
    id: 22,
    title: "Iris Sky",
    artist: "Concrete Concrete",
    cover: process.env.PUBLIC_URL+"/covers/Drifter.png",
    audio: process.env.PUBLIC_URL+"/audios/Iris Sky.mp3",
  },
  {
    id: 23,
    title: "Triggers",
    artist: "Immortal Onion",
    cover: process.env.PUBLIC_URL+"/covers/XD.png",
    audio: process.env.PUBLIC_URL+"/audios/Triggers.mp3",
  },
  {
    id: 24,
    title: "Eye Tracking",
    artist: "Immortal Onion",
    cover: process.env.PUBLIC_URL+"/covers/XD.png",
    audio: process.env.PUBLIC_URL+"/audios/Eye Tracking.mp3",
  },
  {
    id: 25,
    title: "Because I Hear You",
    artist: "toe",
    cover: process.env.PUBLIC_URL+"/covers/Hear You.png",
    audio: process.env.PUBLIC_URL+"/audios/Because I Hear You.mp3",
  },
  {
    id: 26,
    title: "15 Step",
    artist: "Radiohead",
    cover: process.env.PUBLIC_URL+"/covers/In Rainbows.png",
    audio: process.env.PUBLIC_URL+"/audios/15 Step.mp3",
  },
  {
    id: 27,
    title: "春日影 (MyGO!!!!! ver.)",
    artist: "Mygo!!!",
    cover: process.env.PUBLIC_URL+"/covers/Mygo.png",
    audio: process.env.PUBLIC_URL+"/audios/春日影 (MyGO!!!!! ver.).mp3",
  },
  {
    id: 28,
    title: "下过雨的营地出太阳了",
    artist: "Cicada",
    cover: process.env.PUBLIC_URL+"/covers/Cicada.png",
    audio: process.env.PUBLIC_URL+"/audios/下過雨的營地出太陽了.mp3",
  },
];

function Playlist() {
  return (
    <div className="page-container">
      <div className="left-column">
        <h2>Playlist</h2>
        {playlist.map((song, index) => (
          <PlaylistCard
            key={song.id}
            title={song.title}
            artist={song.artist}
            cover={song.cover}
            audio={song.audio}
            index={index}
            playlist={playlist}
          />
        ))}
      </div>
      <div className="right-column">
        <h3>About Me</h3>
        <ul>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="http://github.com/Breten6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Breten6's GitHub Profile"
            >
              <i className="fab fa-github" aria-hidden="true"></i> Breten6
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/bowen-shen-41715b17a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bowen Shen's LinkedIn Profile"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i> Bowen Shen
            </a>
          </li>
          <li>
            <strong>Education:</strong> Bachelor of Applied Science (Computer Engineering) at University of Waterloo
          </li>
          <li>
            <strong>Email:</strong> b8shen@uwaterloo.ca
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Playlist;
