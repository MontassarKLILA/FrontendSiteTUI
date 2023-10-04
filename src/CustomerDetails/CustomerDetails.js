import React from 'react';
import './Styles.css'
import {TextField , Grid } from '@mui/material';

const CustomerInfoComponent = ({ customer }) => {
  return (
    <div className='container' style={{hight :'100%'}}>
      <h4 className='heading'>Information du client</h4>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nom"
            value={`${customer.first_name ? customer.first_name : ''} ${customer.last_name ? customer.last_name : ''}`}
            fullWidth
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            value={customer.email ? customer.email : ''}
            fullWidth
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Téléphone"
            value={customer.phone ? customer.phone : ''}
            fullWidth
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            label="Document de voyage"
            value={`${customer.travel_document ? customer.travel_document : ''} - ${customer.travel_document_number ? customer.travel_document_number : ''}`}
            fullWidth
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
          
        </Grid>
        <Grid item xs={12}>
        <TextField
            label="Adresse"
            value={`${customer.address_1 ? customer.address_1 : ''}, ${customer.city ? customer.city :''}, ${customer.country ? customer.country : ''} ${customer.zipcode ? customer.zipcode : ''}`}
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

export default CustomerInfoComponent;