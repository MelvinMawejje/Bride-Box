import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { LocationCity, Mail, Phone } from '@mui/icons-material';
import { Card } from '@mui/material';


export default function Contacts() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div class="grid place-items-center">
        <div>
        <Typography variant="h2" className='text-center'>
             Contact Us!
            </Typography>
            <Typography variant="h4" className='text-center text-gray-500'>
             We are your go to plug!
            </Typography>
        </div>
        <Card sx={{maxWidth:"100%", margin:"50px", alignContent:"center"}}>
        <Grid container component="main" sx={{ minHeight: '70vh' }}>
        <CssBaseline />
        <Grid
          item
       
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundColor: "#E8ADAA",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding:"20px",
            display:{xs:"none", lg:"block"} 
          }}
        >
             <Typography variant="h3">
             Contact Information
            </Typography>
            <Typography variant="h4">
            Reach out to us today!
            </Typography>
            <div className='mt-12'>
            <p class="mb-3 text-lg text-black md:text-xl">
                <Phone/> +256 788999648
                <Phone/> +256 705468775
            </p>
            <p class="mb-3 text-lg text-black md:text-xl">
                <Mail/> hildahnuwaz1@gmail.com
            </p>
            <p class="mb-3 text-lg text-black md:text-xl">
            <LocationCity/> Kisementi Crane Plaza Basement Shop no:B06.
            </p>
            </div>
        </Grid>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
   
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                    <TextField
                    sx={{paddingX:"5px"}}
                margin="normal"
                required
                fullWidth
                id="email"
                label="First Name"
                name="email"
                autoComplete="email"
                variant="standard"
                autoFocus
              />
                    </Grid>
                    <Grid item lg={6} xs={12}> 
                    <TextField
                     sx={{marginX:"5px"}}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Last Name"
                name="email"
                autoComplete="email"
                variant="standard"
                autoFocus
              />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                    <TextField
                    sx={{paddingX:"5px"}}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                variant="standard"
                autoFocus
              />
                    </Grid>
                    <Grid item lg={6} xs={12}> 
                    <TextField
                     sx={{marginX:"5px"}}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Phone Number"
                name="email"
                autoComplete="email"
                variant="standard"
                autoFocus
              />
                    </Grid>
                </Grid>
                <TextField
                     sx={{marginX:"5px"}}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Message"
                name="email"
                autoComplete="email"
                variant="standard"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              
                <Grid
          item
       
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundColor: "#E8ADAA",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding:"20px",
            display:{xs:"block", md:"none"} 
          }}
        >
             <Typography variant="h2">
             Contact Information
            </Typography>
            <p>Reach out to us today!</p>
            <p><Phone/> +256 788999648</p>
            <p><Phone/> +256 705468775</p>
            <p><Mail/> hildahnuwaz1@gmail.com</p>
            <p><LocationCity/> Kisementi Crane Plaza Basement Shop no:B06.</p>
        </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
        </Card>
    </div>
  );
}