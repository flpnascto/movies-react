import React from "react";
import PropTypes from "prop-types";

import "./style.css";

function Trailer({ embedId }) {
  return (
    <div>
      <div className="md-video-title">Trailer</div>
      <div className="md-video-responsive">
        <iframe
          width="1000"
          height="563"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>

  );
}

Trailer.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Trailer;

// adapted from: https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2