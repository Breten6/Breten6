import React from "react";
import PlaylistCard from "./components/PlaylistCard";
import "./About.css"
const playlist = [
  {
    id: 1,
    title: "Beethoven's Piano Sonata No. 8, Pathetique",
    artist: "Hiromi",
    cover: "/covers/Voice.png",
    audio: "/audios/Beethoven's Piano Sonata No. 8, Pathetique.mp3",
  },
  {
    id: 2,
    title: "Everything's Beautiful",
    artist: "Hiatus Kaiyote",
    cover: "/covers/LHCC.png",
    audio: "/audios/Everything's Beautiful.mp3",
  },
  {
    id: 3,
    title: "A Desert Of Human",
    artist: "toe",
    cover: "/covers/Hear You.png",
    audio: "/audios/A Desert Of Human.mp3",
  },
  {
    id: 4,
    title: "El lugar correcto",
    artist: "Natalia Lafourcade",
    cover: "/covers/DTLF.png",
    audio: "/audios/El lugar correcto.mp3",
  },
  {
    id: 5,
    title: "任我行",
    artist: "Eason Chen",
    cover: "/covers/renwoxing.webp",
    audio: "/audios/renwoxing.mp3",
  },
  {
    id: 6,
    title: "15 Step",
    artist: "Radiohead",
    cover: "/covers/In Rainbows.png",
    audio: "/audios/15 Step.mp3",
  },
  {
    id: 7,
    title: "苦瓜",
    artist: "Eason Chen",
    cover: "/covers/kugua.jpeg",
    audio: "/audios/kugua.mp3",
  },
  {
    id: 8,
    title: "Crust",
    artist: "Flying Lotus",
    cover: "/covers/Yasuke.png",
    audio: "/audios/Crust.mp3",
  },
  {
    id: 9,
    title: "All You Need is Love",
    artist: "the Beatles",
    cover: "/covers/1.png",
    audio: "/audios/All You Need Is Love (Remastered 2009).mp3",
  },
  {
    id: 10,
    title: "哈雪大冒险",
    artist: "Dark bar read second p",
    cover: "/covers/haxue.png",
    audio: "/audios/haxue.wav",
  },
  {
    id: 11,
    title: "Bury the Light",
    artist: "Edwards Archive",
    cover: "/covers/DMC5.png",
    audio: "/audios/Bury the Light.mp3",
  },
  {
    id: 12,
    title: "99.974℃",
    artist: "Tricot",
    cover: "/covers/99974.png",
    audio: "/audios/99.974℃.mp3",
  },
  {
    id: 13,
    title: "Bury the Light",
    artist: "Edwards Archive",
    cover: "/covers/DMC5.png",
    audio: "/audios/Bury the Light.mp3",
  },
  {
    id: 14,
    title: "SWEET | I THOUGHT YOU WANTED TO DANCE",
    artist: "Tyler, The Creator",
    cover: "/covers/CMIYGL.png",
    audio: "/audios/SWEET  I THOUGHT YOU WANTED TO DANCE.mp3",
  },
  {
    id: 15,
    title: "Rosies",
    artist: "Feed Me Jack",
    cover: "/covers/chumpfrey.png",
    audio: "/audios/Rosies.mp3",
  },
  {
    id: 16,
    title: "Lunch",
    artist: "My Little Airport",
    cover: "/covers/Lunch.png",
    audio: "/audios/Lunch.mp3",
  },
  {
    id: 17,
    title: "My little Wish",
    artist: "toe",
    cover: "/covers/Hear You.png",
    audio: "/audios/My little Wish.mp3",
  },
  {
    id: 18,
    title: "达尔文",
    artist: "JJ Lin",
    cover: "/covers/JJcafe.png",
    audio: "/audios/達爾文.mp3",
  },
  {
    id: 19,
    title: "Bury the Light",
    artist: "Edwards Archive",
    cover: "/covers/DMC5.png",
    audio: "/audios/Bury the Light.mp3",
  },
  {
    id: 20,
    title: "日出東方 唯我不敗",
    artist: "Tzusing",
    cover: "/covers/DFBB.png",
    audio: "/audios/日出東方 唯我不敗.mp3",
  },
  {
    id: 21,
    title: "The Choice is Yours (Sorcerian Utility Disk Vol.1)",
    artist: "Falcom Sound Team JDK",
    cover: "/covers/SSAV.png",
    audio: "/audios/The Choice is Yours (Sorcerian Utility Disk Vol.1).mp3",
  },
  {
    id: 22,
    title: "Iris Sky",
    artist: "Concrete Concrete",
    cover: "/covers/Drifter.png",
    audio: "/audios/Iris Sky.mp3",
  },
  {
    id: 23,
    title: "Triggers",
    artist: "Immortal Onion",
    cover: "/covers/XD.png",
    audio: "/audios/Triggers.mp3",
  },
  {
    id: 24,
    title: "Eye Tracking",
    artist: "Immortal Onion",
    cover: "/covers/XD.png",
    audio: "/audios/Eye Tracking.mp3",
  },
  {
    id: 25,
    title: "Because I Hear You",
    artist: "toe",
    cover: "/covers/Hear You.png",
    audio: "/audios/Because I Hear You.mp3",
  },
  {
    id: 26,
    title: "15 Step",
    artist: "Radiohead",
    cover: "/covers/In Rainbows.png",
    audio: "/audios/15 Step.mp3",
  },
  {
    id: 27,
    title: "春日影 (MyGO!!!!! ver.)",
    artist: "Mygo!!!",
    cover: "/covers/Mygo.png",
    audio: "/audios/春日影 (MyGO!!!!! ver.).mp3",
  },
  {
    id: 28,
    title: "下过雨的营地出太阳了",
    artist: "Cicada",
    cover: "/covers/Cicada.png",
    audio: "/audios/下過雨的營地出太陽了.mp3",
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
