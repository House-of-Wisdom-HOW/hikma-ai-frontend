import { FormControlLabel, Checkbox } from '@mui/material';

interface Props {
  label: string
  checked?: boolean
  onChange?: () => void
}

function FilterCheckbox(props: Props) {
  return (
    <FormControlLabel className='w-full' {...props} control={<Checkbox color='primary'/>} />
  );
};

export default FilterCheckbox;
