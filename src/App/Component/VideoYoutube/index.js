import "./VideoYoutube.scss";
function VideoYoutube({ src }) {
  return (
    <div className="section2Container">
      {/* <HeadingSection description={`Hành trình phát triển`} /> */}
      <div>
        <iframe
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="CarouselImagesVideo"
          scrolling="yes"
        ></iframe>
      </div>
      {/* <video
        width="320"
        height="240"
        controls
        autoplay
        className="CarouselImagesVideo"
      >
        <source src={test1} type="video/mp4" />
      </video> */}
    </div>
  );
}
export default VideoYoutube;
