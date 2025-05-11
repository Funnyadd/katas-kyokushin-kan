import 'bootstrap/dist/css/bootstrap.min.css';

const YoutubeVideo = ({ title, videoId }) => {
  return (
    <div>
      <iframe
        loading="lazy"
        width="600" 
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      />
    </div>
  );
}

export default YoutubeVideo;
