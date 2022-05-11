import { Button } from '@mui/material';
import { useTestPriceChange } from 'hooks/apiHooks';

const TestPriceChange = () => {
  const { refetch: testPriceChange } = useTestPriceChange();

  return <Button onClick={() => testPriceChange()}>Test price change</Button>;
};

export default TestPriceChange;
