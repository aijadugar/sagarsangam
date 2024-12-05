import React, { useRef } from 'react';
import { Video } from '../data/videos';
import { VideoThumbnail } from './VideoThumbnail';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoListProps {
  videos: Video[];
  activeVideo: Video;
  onVideoSelect: (video: Video) => void;
}

export const VideoList: React.FC<VideoListProps> = ({
  videos,
  activeVideo,
  onVideoSelect,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-r-lg text-white hover:bg-opacity-75 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-12"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((video) => (
          <VideoThumbnail
            key={video.id}
            video={video}
            isActive={video.id === activeVideo.id}
            onClick={() => onVideoSelect(video)}
          />
        ))}
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-l-lg text-white hover:bg-opacity-75 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};