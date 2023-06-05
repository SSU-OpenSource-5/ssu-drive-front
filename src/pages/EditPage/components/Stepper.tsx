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

const steps = [
  {
    label: '편집할 영상을 선택해주세요.',
    description: (
      <Box className={styles.Wrapper}>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
      </Box>
    ),
  },
  {
    label: '편집할 타임스탬프를 선택해주세요.',
    description: <StampCard></StampCard>,
  },
  {
    label: '대상 차량을 선택해주세요.',
    description: <CarCard></CarCard>,
  },
  {
    label: '운전 유형을 선택해주세요.',
    description: (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">운전 유형</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="위험 운전"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="난폭 운전"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="사고 운전"
          />
        </RadioGroup>
      </FormControl>
    ),
  },
  {
    label: '전달할 메시지를 작성해주세요.',
    description: (
      <TextField
        id="outlined-multiline-flexible"
        label="전달할 코멘트"
        multiline
        sx={{
          width: '100%',
        }}
      />
    ),
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 4 ? (
                  <Typography variant="caption">마지막 작업</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? '보내기' : '다음'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    뒤로
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
}
