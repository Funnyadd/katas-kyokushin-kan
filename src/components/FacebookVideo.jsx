const FacebookVideo = ({ videoId, title }) => {
  return (
    <div>
      <iframe
        title={title}
        src={`https://www.facebook.com/plugins/video.php?href=https://fb.watch/${videoId}/&width=600&show_text=false&height=400&appId`}
        width="600"
        height="400"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; fullscreen"
        data-allowfullscreen="true"
        allowfullscreen
        data-lazy="true"
      />
    </div>
  )
}

export default FacebookVideo;