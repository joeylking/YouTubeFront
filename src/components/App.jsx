import { useState, useEffect } from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer/VideoPlayer';

const apiKey = process.env.REACT_APP_YOUTUBE_KEY;

function App() {
  const [video, setVideo] = useState('mHONNcZbwDY');
  return (
    <div className='App'>
      <VideoPlayer video={video} />
    </div>
  );
}

export default App;
