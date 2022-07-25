import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const cities = [
    "Ciudad de Mexico ( CDMX ) ",
    "Guadalajara",
    "Monterrey",
    "Cancun",
    "New York",
    "Los Angeles",
      "Miami",
      "Chicago",
      "London",
      "Paris",
      "Berlin",
      "Madrid",
      "Roma",
      "Lisboa",
      "Barcelona",
      "Milan",
      "Venecia",
      "Berlin",
      "Amsterdam" 
  ];

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={cities}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label=" Destino" />}
    />
  );
}

