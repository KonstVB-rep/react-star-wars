import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const UiVideo = ({ src, classes, playbackRate = '1.0' }) => {
  const videoRef = useRef(null);
  const setPlayBack = () => {
    videoRef.current.playbackRate = playbackRate;
  };
  useEffect(() => {
    setPlayBack();
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      autoPlay
      muted
      className={classes}
      onCanPlay={() => setPlayBack()}
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