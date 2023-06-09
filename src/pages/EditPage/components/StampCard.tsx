import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

interface StampCardProps {
  selectedVideo: {
    videoId: number;
    timestamp: string;
  };
}

const StampCard: React.FC<StampCardProps> = ({ selectedVideo }) => {
  const { timestamp } = selectedVideo || { timestamp: '' };

  return (
    <Box>
      <Card sx={{ minWidth: 275, m: 1, p: 0 }}>
        <CardContent sx={{ p: 1 }}>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {timestamp}
          </Typography>
        </CardContent>
        {/* <img src="src/assets/images/img_blackbox.png" alt="random" /> */}
        <CardActions>
          <Button size="small">Select</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default StampCard;
