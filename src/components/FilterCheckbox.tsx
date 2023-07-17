import { FormControlLabel, Checkbox } from '@mui/material';

interface Props {
  label: string
  className?: string
  checked?: boolean
  onChange?: () => void
  onTagSelect: (tag: string) => void
}

function FilterCheckbox({ label, onTagSelect, ...props }: Props) {
  const handleChange = () => {
    onTagSelect(label);
  };

  return (
    <FormControlLabel label={label} {...props} control={<Checkbox onChange={handleChange} color='primary'/>} />
  );
};

export default FilterCheckbox;
