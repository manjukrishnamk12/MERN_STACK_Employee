import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField, Grid, Button, Container, CssBaseline, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';

const Addemployee = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: props.data ? props.data.name : '',
    designation: props.data ? props.data.designation : '',
    location: props.data ? props.data.location : '',
    salary: props.data ? props.data.salary : '',
    email: props.data ? props.data.email : '',
    password: props.data ? props.data.password : '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    if (!formData.salary.trim()) {
      newErrors.salary = 'Salary is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}/.test(formData.password)) {
      newErrors.password =
        'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (props.method === 'put') {
      axiosInstance
        .put('http://localhost:3000/emp/update/' + props.data._id, formData)
        .then((response) => {
          if (response.data === 'Updated Successfully') {
            alert(response.data);
            window.location.reload(false);
            navigate('/AdminHome');
          } else {
            alert('not updated');
          }
        });
    } else {
      if (validateForm()) {
      axiosInstance
        .post('http://localhost:3000/emp/add', formData)
        .then((res) => {
          alert(res.data);
          navigate('/AdminHome');
        });
    }
  }
  };

  return (
    <Container component="main" maxWidth="md">
     <CssBaseline />
      <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #006400', // Blue border color
        borderRadius: '10px', // Border radius
        p: 3, // Padding
        mt: 13,
        mx: 'auto',
        }}
      >
      <Typography variant="h5" align="center" color="dark" gutterBottom sx={{ mb: 4,fontFamily: 'cursive' }}>
           Employee Registration
        </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  className="textfields"
                  id="outlined-error"
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                  color='success'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  className="textfields"
                  id="outlined-error"
                  label="Designation"
                  variant="outlined"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  error={Boolean(errors.designation)}
                  helperText={errors.designation}
                  color='success'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  className="textfields"
                  id="outlined-error"
                  label="Location"
                  variant="outlined"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  error={Boolean(errors.location)}
                  helperText={errors.location}
                  color='success'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  className="textfields"
                  id="outlined-error"
                  label="Salary"
                  value={formData.salary}
                  variant="outlined"
                  name="salary"
                  onChange={handleChange}
                  error={Boolean(errors.salary)}
                  helperText={errors.salary}
                  color='success'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="textfields"
                  id="outlined-error"
                  label="Email"
                  variant="outlined"
                  name="email"
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  color='success'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="textfields"
                  id="outlined-error"
                  label="Password"
                  variant="outlined"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  color='success'
                  fullWidth
                />
              </Grid>
            </Grid>
            <br />
            <Button id="submit" variant="contained" onClick={handleSubmit} color='success' fullWidth>
              Submit
            </Button>
      </Box>
    </Container>
  )
}

export default Addemployee





