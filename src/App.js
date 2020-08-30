import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Video/Video';
import db from './firebase.js';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => doc.data()))
    })
  }, [videos]) 
  return (
    <div className="app">
      <div className="videos-container">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}

            />
          ))}
      </div>
    </div>
  );
}

export default App;
