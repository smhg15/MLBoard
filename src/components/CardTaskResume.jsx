import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function CardTaskResume() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          title
        </Typography>
        <Typography variant="h5" component="div">
         sprint
        </Typography>
        <Stack direction="row" spacing={1}>
        <Chip label="Chip Filled" />
        </Stack>
        <Typography variant="body2">
         users
        </Typography>
      </CardContent>
      <CardActions>
      <FormControl sx={{ minWidth: 120 }}>
      <InputLabel id="users">users</InputLabel>
        <Select
          labelId="users"
          label="users"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <IconButton edge="end" aria-label="fileOpen">
          <EditIcon/>
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon/>
        </IconButton>
        </FormControl>
      </CardActions>
    </Card>
  );
}
export default CardTaskResume