import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import React from 'react';

export default function BasicAlerts(props) {
    return (
      <Stack sx={{ width: '20%' }} spacing={2}>
        <Alert severity={props.message ? 'error' : 'success' } >{props.message? props.message: 'your data has been successfully saved!'}</Alert>
      </Stack>
    );
  }