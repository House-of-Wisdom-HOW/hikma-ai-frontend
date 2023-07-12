import { useContext } from 'react';
import { TagContext } from '../TagContext';
import { TextField, FormGroup, Box, Typography } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import FilterCheckbox from '../components/FilterCheckbox';
import tags from '../data/tags.json';

function SideBar() {
  const { selectedTags, setSelectedTags } = useContext(TagContext);

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prevTags: string[]) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((selectedTag) => selectedTag !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  console.log(selectedTags);

  return (
    <Box className='h-full border-r p-8 avg:p-4 xl:p-6' component='div'>
      {/* Search box */}
      <TextField className='w-full' id='standard-basic' label='Search' variant='standard' color='primary' />

      {/* Filter title and icon */}
      <Box className='mt-10 flex justify-between' component='div'>
        <Typography component='div' variant='h6'>Filters</Typography>
        <FilterList />
      </Box>

      {/* Filter checkboxes */}
      <FormGroup className='mt-2'>
        {tags.map(({ tag, id }) => (
          <FilterCheckbox label={tag} key={id} onTagSelect={handleTagSelect}/>
        ))}
      </FormGroup>
    </Box>
  );
}

export default SideBar;
