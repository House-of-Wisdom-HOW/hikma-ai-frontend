import { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Typography, FormGroup, Button } from '@mui/material';
import FilterCheckbox from '../components/FilterCheckbox';
import tags from '../data/tags.json';
import emailjs from 'emailjs-com';
import ToolInput from '../components/ToolInput';

interface FormValues {
  name: string
  email: string
  toolName: string
  toolURL: string
  description: string
  tags: string[]
  otherTag: string
}

function Add() {
  const formTags = [...tags, { tag: 'Other', id: tags.length + 1 }];
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    toolName: '',
    toolURL: '',
    description: '',
    tags: [],
    otherTag: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Use the formValues object to send the email using EmailJS
    const formData = formValues as unknown as Record<string, unknown>;
    emailjs
      .send('your_service_id', 'your_template_id', formData, 'your_user_id')
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleTagChange = (tag: string) => {
    if (formValues.tags.includes(tag)) {
      setFormValues((prevValues) => ({
        ...prevValues,
        tags: prevValues.tags.filter((t) => t !== tag),
        otherTag: tag === 'Other' ? '' : formValues.otherTag
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        tags: [...prevValues.tags, tag],
        otherTag: tag === 'Other' ? '' : formValues.otherTag
      }));
    }
  };

  return (
    <Box component='form' className='p-4 w-96 h-auto bg-gray m-auto text-center shadow-bown'>
      <Typography variant='h5'>Add a Tool</Typography>

      <Box className='flex gap-2'>
        <ToolInput
          id='name'
          label='Your Name'
          value={formValues.name}
          handleChange={handleChange}
        />
        <ToolInput
          id='email'
          label='Your Email'
          value={formValues.email}
          handleChange={handleChange}
        />
      </Box>

      <Box className='flex gap-2'>
        <ToolInput
          id='toolName'
          label='Tool Name'
          value={formValues.toolName}
          handleChange={handleChange}
        />
        <ToolInput
          id='toolURL'
          label='Tool URL'
          value={formValues.toolURL}
          handleChange={handleChange}
        />
      </Box>

      <ToolInput
        id='description'
        label='Description'
        value={formValues.description}
        handleChange={handleChange}
        multiline
        maxRows={3}
      />

      <Typography variant='h6'>Tool Tags</Typography>

      <FormGroup>
        {formTags.map(({ tag, id }) => (
          <FilterCheckbox
            label={tag}
            key={id}
            checked={formValues.tags.includes(tag)}
            onChange={() => { handleTagChange(tag); }}
          />
        ))}
      </FormGroup>

        <ToolInput
          id='otherTag'
          label='Other'
          value={formValues.otherTag}
          handleChange={handleChange}
          disabled={!formValues.tags.includes('Other')}
        />

      <Button
        sx={{ marginTop: '20px', color: 'white', width: '100%' }}
        variant='contained'
        color='primary'
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
}

export default Add;
