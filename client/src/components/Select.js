import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [value, setValue] = React.useState('');
  const [options, setOptions] = React.useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const loadData = async () => {
    const response = await fetch('http://localhost:3001/api/data');
    const data = await response.json();
    setOptions(data);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choix</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Choix"
          onChange={handleChange}
        >
          {
          console.log(options)
          /*options.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))*/}
        </Select>
      </FormControl>
    </Box>
  );
}
