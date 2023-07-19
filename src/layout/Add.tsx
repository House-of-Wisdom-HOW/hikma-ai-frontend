/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Typography, FormGroup, Button } from '@mui/material';
import FilterCheckbox from '../components/FilterCheckbox';
import LoadingSpinner from '../components/LoadingSpinner';
import tags from '../data/tags.json';
import emailjs from 'emailjs-com';
import ToolInput from '../components/ToolInput';

/* TODO: form validation and confirmation if email is sent or not
  we can use modals maybe
*/
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    toolName: '',
    toolURL: '',
    description: '',
    tags: [],
    otherTag: ''
  });

  // email message template
  const emailTemplate = `
    Name: ${formValues.name}
    Email: ${formValues.email}
    Tool Name: ${formValues.toolName}
    Tool URL: ${formValues.toolURL}
    Description: ${formValues.description}
    Tags: ${formValues.tags.join(', ')}
    Other Tag: ${formValues.otherTag}
    `;

  // adds changes to formvalues
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  // adds checked tags
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Use the formValues object to send the email using EmailJS
    const emailParams = {
      from_name: formValues.name,
      from_email: formValues.email,
      message: emailTemplate
    };
    setIsLoading(true);
    try {
      await emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID ?? '',
          process.env.REACT_APP_TEMPLATE_ID ?? '',
          emailParams,
          process.env.REACT_APP_PUBLIC_KEY ?? '',
        )
        .then((response) => {
          console.log('Email sent successfully!', response);
        });
      // set back to default
      setFormValues({
        name: '',
        email: '',
        toolName: '',
        toolURL: '',
        description: '',
        tags: [],
        otherTag: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
    setIsLoading(false);
  };

  // adds tag to list in form values
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
    <Box component='form' className='p-8 w-11/12 sm:max-w-lg h-auto bg-gray m-auto text-center shadow-bown' style={{ marginTop: '50px' }}>

      {isLoading && <LoadingSpinner/>}

      {!isLoading && (
        <>
          <Typography variant='h5'>Add a Tool</Typography>

          {/* Name, Email, tool name and URL input fields */}
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
          <ToolInput
            id='description'
            label='Description'
            value={formValues.description}
            handleChange={handleChange}
            multiline
            maxRows={3}
          />

          {/* check boxes */}
          <Typography variant='h6'>Tags</Typography>
          <FormGroup
            className='mt-2 gap-3'
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              '@media (min-width: 900px)': {
                gridTemplateColumns: 'repeat(3, 1fr)',
              },
            }}>
            {formTags.map(({ tag, id }) => (
              <FilterCheckbox
                label={tag}
                key={id}
                checked={formValues.tags.includes(tag)}
                onTagSelect={() => { handleTagChange(tag); }}
              />
            ))}
          </FormGroup>

          {/* Other input field */}
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
        </>
      )}
    </Box>
  );
}

export default Add;
