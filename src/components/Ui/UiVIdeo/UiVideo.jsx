import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const UiVideo = ({ src, classes, playbackRate = 1.0 }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      autoPlay
      muted
      className={classes}
      playbackRate={playbackRate}
    >
      <source src={src} />
    </video>
  );
};


UiVideo.propTypes = {
  src: PropTypes.string,
  classes: PropTypes.string,
  playbackRate: PropTypes.string
}
export default UiVideo;