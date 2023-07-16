import { Box, TextField, Typography, FormGroup } from '@mui/material';
import FilterCheckbox from '../components/FilterCheckbox';
import tags from '../data/tags.json';

function Add() {
  return (
    <Box className='p-4 w-96 h-auto bg-gray m-auto text-center shadow-bown'>
      <Typography variant='h5'>Add a Tool</Typography>

      <Box className='flex gap-2'>
        <TextField required className='w-full' id='standard-required' label='Your Name' variant='standard' color='primary' />
        <TextField required className='w-full' id='standard-required' label='Your Email' variant='standard' color='primary' />
      </Box>

      <Box className='flex gap-2'>
        <TextField required className='w-full' id='standard-required' label='Tool Name' variant='standard' color='primary' />
        <TextField required className='w-full' id='standard-required' label='Tool URL' variant='standard' color='primary' />
      </Box>

      <TextField required multiline maxRows={3} className='w-full' id='standard-multiline-flexible' label='Description' variant='standard' color='primary' />

      <Typography variant='h6'>Tool Tags</Typography>
      <FormGroup className=''>
        {tags.map(({ tag, id }) => (
          <FilterCheckbox label={tag} key={id}/>
        ))}
          <FilterCheckbox label='Other'/>
      </FormGroup>
      <TextField className='w-full' id='standard-basic' label='Other' variant='standard' color='primary' />

    </Box>
  );
}

export default Add;
