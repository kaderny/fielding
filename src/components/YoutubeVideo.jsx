import React from "react";
import YouTube from "react-youtube";

const YoutubeVideo = ({ videoId }) => {
  const opts = {
    height: "290",
    width: "540",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      start: 30,
      end: 200,
      autoplay: 1,
      mute: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YoutubeVideo;
