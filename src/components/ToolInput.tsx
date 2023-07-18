import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

interface props {
  label: string
  id: string
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  disabled?: boolean
  multiline?: boolean
  maxRows?: number
}

function ToolInput({ id, value, handleChange, ...props }: props) {
  return (
    <TextField
      {...props}
      required
      className='w-full'
      sx={{ marginBottom: '10px' }}
      id={id}
      name={id}
      variant='standard'
      color='primary'
      value={value}
      onChange={handleChange}
    />
  );
}

export default ToolInput;
