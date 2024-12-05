import React from 'react';
import { Video } from '../data/videos';

interface VideoPlayerProps {
  video: Video;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  return (
    <div className="w-full bg-black rounded-lg overflow-hidden shadow-xl">
      <video
        className="w-full aspect-video"
        controls
        autoPlay
        key={video.url}
        poster={video.thumbnail}
      >
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="p-4 bg-gray-900">
        <h2 className="text-xl font-bold text-white mb-2">{video.title}</h2>
        <p className="text-gray-400">{video.description}</p>
      </div>
    </div>
  );
};