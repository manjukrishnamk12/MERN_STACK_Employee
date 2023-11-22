
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from '../axiosinterceptor';

const UserHome = () => {
  const [cardData,setData]= useState([]);
    useEffect(()=>{
       fetchPost();
    },[]);

     function fetchPost(){
      axiosInstance.get('http://localhost:3000/emp/').then((res)=>{
        setData(res.data);
        console.log(cardData);
      })
     }

    
  return (
    <div style={{margin:"7%"}} className="cardContainer">
      <Grid container spacing={2}>
          {cardData.map((val,i)=>(
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }} className="card">
  
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="primary">
                  {val.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {val.designation}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {val.location}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Salary: {val.salary}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Email: {val.email}
                </Typography>
              </CardContent>
    
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default UserHome;
