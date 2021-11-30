import './VideoPlayer.css';

const VideoPlayer = props => {
  return (
    <div className='video-container'>
      <iframe
        id='ytplayer'
        type='text/html'
        src={`https://www.youtube.com/embed/${props.video}?autoplay=1`}
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
