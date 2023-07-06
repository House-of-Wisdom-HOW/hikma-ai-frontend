import { TextField, FormGroup, Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FilterList } from '@mui/icons-material';
import FilterCheckbox from '../components/FilterCheckbox';

// TODO: Needed to make fixed nav
/* import { makeStyles } from '@material-ui/core/styles';
 const useStyles = makeStyles((theme) => ({
   toolbar: theme.mixins.toolbar,
 }));
*/

function SideBar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#E1B15D', // brown
      },
      secondary: {
        main: '#FFFFFF', // white
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box className='h-screen border-r p-6 my-2' component='div'>
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
    </ThemeProvider>
  );
}

export default SideBar;
