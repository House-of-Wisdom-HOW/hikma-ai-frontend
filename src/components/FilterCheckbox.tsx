import { FormControlLabel, Checkbox } from '@mui/material';

interface Props {
  label: string
  className?: string
  checked?: boolean
  onChange?: () => void
}

function FilterCheckbox(props: Props) {
  return (
    <FormControlLabel {...props} control={<Checkbox color='primary'/>} />
  );
};

export default FilterCheckbox;
