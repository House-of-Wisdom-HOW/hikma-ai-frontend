import { useState, MouseEvent, useContext, useEffect } from 'react';
import { TagContext } from '../context/TagContext';
import { SearchContext } from '../context/SearchContext';
import { Typography, Box, Grid, IconButton, Menu, MenuItem, ListItemIcon } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { Schedule, ArrowUpward, ArrowDownward } from '@mui/icons-material';
import Article from '../components/Article';
import DUMMY_DATA from '../data/future.json';
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

function Future() {
  // declare
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState<string>('Latest');

  // length
  const totalTools = DUMMY_DATA.length;
  const [toolCount, setToolCount] = useState(totalTools);
  const [sortedData, setSortedData] = useState(DUMMY_DATA);

  // context
  const { selectedTags } = useContext(TagContext);
  const { searchText } = useContext(SearchContext);

  // sort and filter data
  const sortData = (option: string) => {
    let filteredData = [...DUMMY_DATA];

    // Apply filters based on selected tags and search text
    if (selectedTags.length > 0) {
      filteredData = filteredData.filter((item) =>
        selectedTags.every((tag) => item.tags.includes(tag))
      );
    }

    // text is split into array and each string tries to find any match with any data of an article
    if (searchText.length > 0) {
      const searchWords = searchText.toLowerCase().split(' ');
      filteredData = filteredData.filter((item) =>
        searchWords.every(
          (word) =>
            item.title.toLowerCase().includes(word) ||
            item.description.toLowerCase().includes(word) ||
            item.tags.some((tag) => tag.toLowerCase().includes(word))
        )
      );
    }

    // Sort the filtered data based on the selected option
    const sortedResult = [...filteredData];
    switch (option) {
      case 'Latest':
        sortedResult.sort((a, b) => b.id - a.id); // Sort by descending order of id
        break;
      case 'Oldest':
        sortedResult.sort((a, b) => a.id - b.id); // Sort by ascending order of id
        break;
      case 'Name (A-Z)':
        sortedResult.sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically by title (A-Z)
        break;
      case 'Name (Z-A)':
        sortedResult.sort((a, b) => b.title.localeCompare(a.title)); // Sort alphabetically by title (Z-A)
        break;
      default:
        break;
    }

    setToolCount(sortedResult.length);
    setSortedData(sortedResult);
  };

  // updates data whenever there is a search or checkbox is clicked
  useEffect(() => {
    sortData(selectedOption);
  }, [selectedOption, selectedTags, searchText]);

  const handleOptionSelect = (label: string) => {
    setSelectedOption(label);
    sortData(label); // Call the sortData function with the selected option
    handleClose();
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className='p-8'>
      <Box className='flex sm:justify-between sm:flex-row flex-col text-center'>
        {/* no. of tools avaible and showing */}
        <Typography variant='h6'>Showing {toolCount} of {totalTools} Total Tools.</Typography>

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
        {sortedData.map(({ id, ...props }) => (
          <Article {...props} key={id}/>
        ))}
      </Grid>
    </Box>
  );
}

export default Future;
