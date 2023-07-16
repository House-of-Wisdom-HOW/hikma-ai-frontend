import { FormControlLabel, Checkbox } from '@mui/material';

interface Props {
  label: string
  onTagSelect: (tag: string) => void
}

function FilterCheckbox({ label, onTagSelect }: Props) {
  const handleChange = () => {
    onTagSelect(label);
  };

  return (
    <FormControlLabel className='w-full' label={label} control={<Checkbox onChange={handleChange} color='primary'/>} />
  );
};

export default FilterCheckbox;
