import React, { FC, useEffect, useState } from 'react';
import {
  Card,
  CardMedia,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material';
import { videoApis } from '../../../apis/videoApis';

interface Video {
  videoId: number;
  url: string;
  timestamp: string;
  thumbnailUrl: string; // Add a thumbnailUrl property to the Video interface
}

interface VideoCardProps {
  onSelectVideo: (videoId: number, timestamp: string) => void;
}

const VideoCard: FC<VideoCardProps> = ({ onSelectVideo }) => {
  const [videos, setVideos] = useState<Video[] | undefined>(undefined);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await videoApis.getVideos(1);
        console.log(response);
        setVideos(response);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoSelect = (videoId: number, timestamp: string) => {
    setSelectedVideo(videoId);
    onSelectVideo(videoId, timestamp);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const selectedVideo = videos?.find(
      (video) => video.videoId === Number(value),
    );
    if (selectedVideo) {
      handleVideoSelect(selectedVideo.videoId, selectedVideo.timestamp);
    }
  };

  return (
    <>
      <RadioGroup
        value={selectedVideo?.toString() || ''}
        onChange={handleRadioChange}
      >
        {videos?.map((video) => (
          <FormControlLabel
            key={video.videoId}
            value={video.videoId.toString()}
            control={<Radio />}
            label={
              <Card
                sx={{ p: 2 }}
                onClick={() =>
                  handleVideoSelect(video.videoId, video.timestamp)
                }
              >
                <CardMedia
                  component="video" // Change the component to 'img'
                  src={video.url} // Use the thumbnail URL instead of the video URL
                  title={`Video ${video.videoId}`}
                />
                {/* <Typography>{video.timestamp}</Typography> */}
              </Card>
            }
          />
        ))}
      </RadioGroup>
    </>
  );
};

export default VideoCard;
