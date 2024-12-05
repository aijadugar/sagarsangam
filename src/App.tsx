import React, { useState } from 'react';
import { VideoPlayer } from './components/VideoPlayer';
import { VideoList } from './components/VideoList';
import { videos } from './data/videos';

function App() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          With love ...
        </h1>
        <div className="max-w-4xl mx-auto mb-8">
          <VideoPlayer video={activeVideo} />
        </div>
        <VideoList
          videos={videos}
          activeVideo={activeVideo}
          onVideoSelect={setActiveVideo}
        />
      </div>
    </div>
  );
}

export default App;