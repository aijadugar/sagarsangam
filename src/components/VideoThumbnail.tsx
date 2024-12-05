import React from 'react';
import { Video } from '../data/videos';
import { Play } from 'lucide-react';

interface VideoThumbnailProps {
  video: Video;
  isActive: boolean;
  onClick: () => void;
}

export const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  video,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`relative flex-shrink-0 w-64 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isActive ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={onClick}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-36 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <Play className="w-12 h-12 text-white" />
      </div>
      <div className="p-2">
        <h3 className="text-sm font-semibold text-white truncate">{video.title}</h3>
      </div>
    </div>
  );
};