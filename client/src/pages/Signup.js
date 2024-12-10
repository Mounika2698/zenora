import { useState } from 'react';
import TextField from '../components/Textfield';
import { Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { SIGNUP_API } from '../constants/Api';

const Signup = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(SIGNUP_API, {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                password: userData.password,
            })
            .then((res) => {
                console.log(res);
            });
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '20px' }}
        >
            <Grid item xs={12} sm={8} md={6}>
                <Box
                    sx={{
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                        borderRadius: '10px',
                        padding: '30px',
                        maxWidth: '500px',
                        margin: 'auto',
                    }}
                >
                    <Typography variant="h5" align="center" gutterBottom>
                        Signup
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                    onChange={handleInputChange}
                                    value={userData.firstName}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                    onChange={handleInputChange}
                                    value={userData.lastName}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    type="text"
                                    onChange={handleInputChange}
                                    value={userData.email}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Password"
                                    name="password"
                                    type="password"
                                    onChange={handleInputChange}
                                    value={userData.password}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Signup;
