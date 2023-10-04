import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import CustomerInfoComponent from './CustomerDetails';
import TravelInfoComponent from './TravelDetails';
import HotelInfoComponent from './HotelDetails';

import { useLocation } from "react-router-dom";
import { HashLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

const CustomerFile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let data = location.state.data;
    
    if (!data) return(
        <div className={'pageContainer'}>
        <div className='loaderContainer'>
        <HashLoader color="#007BFF" size={100} />
        </div>
        </div>
      )

  return (
    <div style={{  display: 'flex'}}>
         { data && data.customerFileByName ?
        <Card style={{  marginTop: '1%' ,marginBottom: '1%', marginLeft: '10%' ,marginRight: '10%' ,padding :'10px' , borderRadius :'20px' }}> 
            <IconButton  onClick={() => navigate(-1)}  aria-label="delete"  color="primary">
                <ArrowBackIcon />
            </IconButton>
            <CardContent >
                    <Typography variant="p" component="div">
                            <HotelInfoComponent hotel={data.customerFileByName.hotel ? data.customerFileByName.hotel : null} />
                    </Typography>

                    <div className='Details' style={{ display: 'flex', marginTop: '2px', alignItems: 'stretch' }}>
                        <div style={{ flex: 1 , display :'flex'}}>
                            <Typography variant="p" component="div" style={{ height: '100%' , display :'flex'}}>
                                <CustomerInfoComponent customer={data.customerFileByName.customer ? data.customerFileByName.customer : null} />
                            </Typography>
                        </div>

                        <div style={{ flex: 1,marginLeft: '10px' }}>
                            <Typography variant="p" component="div" style={{ height: '100%' }}>
                                <TravelInfoComponent travelInfo={data.customerFileByName ? data.customerFileByName : null} />
                            </Typography>
                        </div>
                    </div>      
            </CardContent>
        </Card>
      
      :null }
    </div>
  );
}

export default CustomerFile;