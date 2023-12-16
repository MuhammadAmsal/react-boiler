import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" style={{width:"30",height:"15",fontSize:"10px"}} type='submit' >Add Todo</Button>
    </Stack>
  );
}