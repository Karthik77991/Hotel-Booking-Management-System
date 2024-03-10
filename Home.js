import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import background from '../images/Background1.jpg';

function HotelHome() {
  return (
    <div>
      {/* Header */}
      <Grid container justifyContent="center" alignItems="center" height="100vh">
        <Grid item xs={12} textAlign="center">
          <Typography variant="h2" component="h1" color="primary">
            Welcome to Our Hotel Booking Website
          </Typography>
          <Typography variant="h5" color="textSecondary" mt={3}>
            Find the Perfect Stay for Your Next Adventure
          </Typography>
        </Grid>
      </Grid>

      {/* Main Content with Background Image */}
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: '400px', // Set a minimum height for better visibility
          padding: 4,
        }}
      >
        {/* Content Overlay */}
        <Grid container justifyContent="center" alignItems="center" textAlign="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" color="primary">
              Plan Your Perfect Getaway
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={3}>
              Explore our curated selection of hotels and find the one that suits your preferences.
            </Typography>
            <Button variant="contained" color="primary" mt={3}>
              Book Now
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* Additional Sections, Footer, etc. can be added as needed */}
    </div>
  );
}

export default HotelHome;
