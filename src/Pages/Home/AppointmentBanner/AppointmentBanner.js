import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';


//background img fixed kora
const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken,luminosity',
    backgroundPosition: 'center',
    marginTop: 175

}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                        </Typography>
                        <Button varient="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;