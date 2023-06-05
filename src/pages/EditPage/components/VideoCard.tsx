import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

export default function VideoCard() {
  return (
    <Box>
      <Card sx={{ minWidth: 275, m: 1, p: 0 }}>
        <CardContent sx={{ p: 1 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            2023.3.4
          </Typography>
        </CardContent>
        <img src="src/assets/images/img_blackbox.png" alt="random" />
        <CardActions>
          <Button size="small">선택하기</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
