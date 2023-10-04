import React, { useState } from 'react';
import './CustomerFormStryles.css'; 
import backgroundImage from './backgroud.jpg'; 
import { useApolloClient } from '@apollo/client';
import { GET_CUSTOMER_FILE } from '../actions/queries';
import {TextField , Grid } from '@mui/material';
import { HashLoader } from 'react-spinners';
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomerForm = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: ''
  });
  const [formErrors, setFormErrors] = useState({
    FirstName: '',
    LastName: '',
  });
  
  const [open, setOpen] = useState(false);
  const client = useApolloClient();
  const [loading, setLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.FirstName) {
      errors.FirstName = 'Ce champ est obligatoire';
    }
    if (!formData.LastName) {
      errors.LastName = 'Ce champ est obligatoire';
    }
    setFormErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      console.log('error');
      return;
    }

    try {
        setLoading(true);
        const { data } = await client.query({
          query: GET_CUSTOMER_FILE,
          variables:  {
            firstname : formData.FirstName ,
            lastname : formData.LastName
        }
        });
        
        navigate('/TravelDetails', {
          state: {
            data : data
          }
        });

      } catch (error) {
        console.error('Error:', error);
        setOpen(true);
      }finally {
          setLoading(false);
      }
  };

  return (
    <div className={loading ? 'pageContainer' : ''}>
    {loading ? 
       <div className='loaderContainer'>
      <HashLoader color="#36d7b7" size={100} />
      </div>
      :
    <div className="form-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <h1>TUIFLY</h1>
  
      <div className="form-content">
        <div style={{ textAlign : 'center' }}>
        <h2>Veuillez sasir votre nom et prénom pour consulter votre document de voyage</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={6} >
            <div className="form-group" style={{marginTop : '20px'}}>
           
              <TextField 
              id="FirstName" 
              label="Prénom" 
              variant="filled"
              name="FirstName"
              className='inputAria'
              value={formData.FirstName}
              onChange={handleInputChange}
              size="small"
              error={Boolean(formErrors.FirstName)}
              helperText={formErrors.FirstName}
              />
            </div>
            </Grid>
            <Grid item xs={6} >
            <div className="form-group" style={{marginTop : '20px'}}>
           
              <TextField 
              id="FirstName" 
              label="Nom de famille" 
              variant="filled"
              name="LastName"
              className='inputAria'
              value={formData.LastName}
              onChange={handleInputChange}
              size="small"
              error={Boolean(formErrors.LastName)}
              helperText={formErrors.LastName}
              />

              
            </div>
            </Grid>
          </Grid>
          <div style={{display :'flex' , justifyContent : 'flex-end'}}>
            <button type="submit">Consulter</button>
          </div>
        </form>
      </div>
    </div>
     }
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Veuillez vérifier votre nom et prénom
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomerForm;