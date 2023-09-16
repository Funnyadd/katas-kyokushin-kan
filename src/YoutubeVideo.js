import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const YoutubeVideo = (props) => {
  return (
    <div>
        <iframe
            loading="lazy"
            width="600" 
            height="400"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            title={props.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowfullscreen
            >
        </iframe>
    </div>
  );
}

export default YoutubeVideo;
