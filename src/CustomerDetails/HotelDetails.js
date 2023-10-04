import React from 'react';
import Rating from '@mui/material/Rating';
import './Styles.css'
import HotelImages from './HotelImagesSlider';
import { Grid } from '@mui/material';


const HotelInfoComponent = ({ hotel }) => {
 
  return (
    
    <div className='container' style={{display : 'flex'}}>
      <Grid container spacing={2}>
          <Grid item xs={4} >
  
            <HotelImages HotelImages={hotel} /> 
    
          </Grid>
          <Grid item xs={8} >
            <div className='NameRating'>
              <h3 style={{color :'black'}}>{hotel.hotel_name ? hotel.hotel_name : ''}</h3>
              <Rating name="read-only" defaultValue={hotel.stars ? hotel.stars :  0 } readOnly />
            </div>
            <p>{hotel.hotel_description ? hotel.hotel_description : ''}</p>
      
          </Grid>
      </Grid>
        
    </div>
  );
}

export default HotelInfoComponent;