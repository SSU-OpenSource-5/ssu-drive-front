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
} from '@mui/material';
import { videoApis } from '../../../apis/videoApis';

interface SelectedVideo {
  videoId: number;
  timestamp: string;
}

const VerticalLinearStepper: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedVideo, setSelectedVideo] = React.useState<SelectedVideo>({
    videoId: 0,
    timestamp: '',
  });

  const handleVideoSelect = (videoId: number, timestamp: string) => {
    setSelectedVideo({ videoId, timestamp });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setSelectedVideo({ videoId: 0, timestamp: '' });
  };

  const steps = [
    {
      label: 'Select the video to edit',
      content: (
        <VideoCard
          onSelectVideo={(videoId, timestamp) =>
            handleVideoSelect(videoId, timestamp)
          }
        />
      ),
    },
    {
      label: 'Select the timestamp to edit',
      content: <StampCard selectedVideo={selectedVideo} />,
    },
    {
      label: 'Select the target car',
      content: <CarCard />,
    },
    {
      label: 'Select the driving type',
      content: (
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Driving Type
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Dangerous Driving"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Reckless Driving"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Accident Prone Driving"
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      label: 'Write the message to send',
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
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default VerticalLinearStepper;
