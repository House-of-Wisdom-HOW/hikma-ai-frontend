import { FormControlLabel, Checkbox } from '@mui/material';

interface Props {
  label: string
}

function FilterCheckbox({ ...props }: Props) {
  return (
    <FormControlLabel className='w-full' {...props} control={<Checkbox color='primary'/>} />
  );
};

export default FilterCheckbox;
