import { Box } from '@mui/material';
import HorizontalLinearStepper from './Stepper';
const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

export default function EditPage() {
  return (
    <Box>
      <HorizontalLinearStepper></HorizontalLinearStepper>
    </Box>
  );
}
