import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,

}


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400

}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 13, color: 'gray', fontWeight: 300, my: 3 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla lacus, fringilla a dolor ut, maximus viverra leo. Aliquam faucibus maximus justo, ac vehicula ligula sollicitudin a. Etiam malesuada enim vel enim fermentum eleifend. Ut volutpat, dui mollis sollicitudin tempor, lectus dui condimentum purus, at cursus massa nisi eu nunc. Nam at posuere libero
                        </Typography>
                        <Button varient="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;