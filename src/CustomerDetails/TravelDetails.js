import React from 'react';
import {TextField , Grid } from '@mui/material';

const TravelInfoComponent = ({ travelInfo }) => {
  const formatDateTime = (inputDate) => {
    const date = new Date(inputDate);
  
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
  
    // const hours = date.getHours().toString().padStart(2, '0');
    // const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${day}/${month}/${year}`;
  };
  return (
    <div className='container'>
      <h2 className='heading'>Information de voyage</h2>
      <Grid container spacing={2}>
      <Grid item xs={12} >
          <TextField
            label="Destination"
            value={`${travelInfo.destination_city ? travelInfo.destination_city : ''}, ${travelInfo.destination_country ? travelInfo.destination_country : ''}`}
            fullWidth
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Numéro de vol"
            value={travelInfo.flight_number ? travelInfo.flight_number : ''}
            fullWidth
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Type de voyage"
            value={travelInfo.travel_type ? travelInfo.travel_type : ''}
            fullWidth
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      <Grid item xs={12} sm={6}>
          
          <TextField
            label="Date de départ"
            value={formatDateTime(travelInfo.departure_date ? travelInfo.departure_date : null)}
            fullWidth
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date du retour"
            value={formatDateTime(travelInfo.arrival_date ? travelInfo.arrival_date : null)}
            fullWidth
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            label="Check-in date"
            value={formatDateTime(travelInfo.check_in_date ? travelInfo.check_in_date : null)}
            fullWidth
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Check-out date"
            value={formatDateTime(travelInfo.check_out_date ? travelInfo.check_out_date : null)}
            fullWidth
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        
      </Grid>
    </div>
  );
};

export default TravelInfoComponent;