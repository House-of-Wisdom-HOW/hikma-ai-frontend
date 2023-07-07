import { TextField, FormGroup, Box, Typography } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import FilterCheckbox from '../components/FilterCheckbox';

function SideBar() {
  return (
    <Box className='h-full border-r p-8' component='div'>
      {/* Search box */}
      <TextField className='w-full' id='standard-basic' label='Search' variant='standard' color='primary' />

      {/* Filter title and icon */}
      <Box className='mt-10 flex justify-between' component='div'>
        <Typography component='div' variant='h6'>Filters</Typography>
        <FilterList />
      </Box>

      {/* Filter checkboxes */}
      <FormGroup className='mt-2'>
        <FilterCheckbox label='Quran'/>
        <FilterCheckbox label='Hadith'/>
        <FilterCheckbox label='Prayer'/>
        <FilterCheckbox label='Education'/>
        <FilterCheckbox label='History'/>
      </FormGroup>
    </Box>
  );
}

export default SideBar;
