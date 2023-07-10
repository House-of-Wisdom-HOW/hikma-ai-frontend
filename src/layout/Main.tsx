import { useState, MouseEvent } from 'react';
import { Typography, Box, Grid, IconButton, Menu, MenuItem, ListItemIcon } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { Schedule, ArrowUpward, ArrowDownward } from '@mui/icons-material';
import Article from '../components/Article';
import DUMMY_DATA from '../data/data.json';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface SortOption {
  label: string
  icon: ReactJSXElement
}

const sortOptions: SortOption[] = [
  { label: 'Latest', icon: <Schedule /> },
  { label: 'Oldest', icon: <Schedule /> },
  { label: 'Name (A-Z)', icon: <ArrowDownward /> },
  { label: 'Name (Z-A)', icon: <ArrowUpward /> },
];

function Main(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState<string>('Latest');
  const toolCount = DUMMY_DATA.length;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (label: string) => {
    setSelectedOption(label);
    handleClose();
  };

  return (
    <Box className='p-8'>
      <Box className='flex sm:justify-between sm:flex-row flex-col text-center'>
        {/* no. of tools avaible and showing */}
        <Typography variant='h6'>Showing {toolCount} of {toolCount} Total Tools.</Typography>

        {/* Sorting */}
        <Typography>
          <span className='text-grey'>Sort by:</span> {selectedOption}
          <IconButton aria-label='Sort' onClick={handleClick}><SortIcon /></IconButton>
          {/* dropdown menu for sorting */}
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {sortOptions.map(({ label, icon }) => (
              <MenuItem key={label} onClick={() => { handleOptionSelect(label); }}>
                <ListItemIcon>{icon}</ListItemIcon>
                <Typography variant='inherit'>{label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Typography>
      </Box>

      <Grid container className='mt-10' rowGap={6}>
        {DUMMY_DATA.map(({ src, image, title, description, id }) => (
          <Article image={image} src={src} title={title} description={description} key={id} />
        ))}
      </Grid>
    </Box>
  );
}

export default Main;
