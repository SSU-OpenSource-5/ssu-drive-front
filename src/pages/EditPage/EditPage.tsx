import { Box } from '@mui/material';
import HorizontalLinearStepper from './components/Stepper';
import { COLORS } from '../../constants/styles/color';
import BottomNavbar from '../../components/BottomNavbar';
import Appbar from '../../components/Appbar';
const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

export default function EditPage() {
  return (
    <>
      {/* TODO Padding으로 높이조절 하지 말고 100vh로 높이 조절 */}
      <Appbar />
      <Box bgcolor={COLORS.grayscale.gray1} padding={2} paddingBottom={100}>
        <HorizontalLinearStepper></HorizontalLinearStepper>
        <BottomNavbar />
      </Box>
    </>
  );
}
