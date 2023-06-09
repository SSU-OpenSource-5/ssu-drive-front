import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import * as styles from './Stepper.css';
import VideoCard from './VideoCard';
import StampCard from './StampCard';
import CarCard from './CarCard';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Slider,
} from '@mui/material';
import { videoApis } from '../../../apis/videoApis';

interface SelectedVideo {
  videoId: number;
  timestamp: string;
}

const VerticalLinearStepper: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedVideo, setSelectedVideo] = React.useState<{
    videoId: number;
    timestamp: string;
  } | null>(null);

  const handleVideoSelect = (videoId: number, timestamp: string) => {
    setSelectedVideo({ videoId, timestamp });
  };

  const handleNext = () => {
    if (selectedVideo) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setSelectedVideo(null);
  };

  const steps = [
    {
      label: '편집할 영상을 선택하세요',
      content: (
        <VideoCard
          onSelectVideo={(videoId, timestamp) =>
            handleVideoSelect(videoId, timestamp)
          }
        />
      ),
    },
    {
      label: '타임스탬프를 선택해주세요',
      content: <StampCard selectedVideo={selectedVideo} />,
    },
    {
      label: '대상차량을 선택해주세요',
      content: <CarCard />,
    },
    {
      label: '운전 점수를 매겨주세요',
      content: (
        <FormControl
          sx={{
            minWidth: '100%',
          }}
        >
          <FormLabel id="demo-radio-buttons-group-label">운전 점수</FormLabel>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            // getAriaValueText={'Test'}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
        </FormControl>
      ),
    },
    {
      label: '전달할 메시지를 선택해주세요',
      content: (
        <TextField
          id="outlined-multiline-flexible"
          label="Comment to send"
          multiline
          sx={{
            width: '100%',
          }}
        />
      ),
    },
  ];

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 4 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.content}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={selectedVideo === null && index === 0}
                  >
                    {index === steps.length - 1 ? 'Send' : 'Next'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>피드백 전달 완료!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default VerticalLinearStepper;
