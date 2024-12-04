import { useState } from 'react'
import TextField from '../components/Textfield'
import { Box, Button, Card, CardActionArea, CardMedia, CardContent, Container, Grid, Typography, CardActions, CardHeader } from '@mui/material'
import axios from 'axios';
import { SIGNUP_API } from '../constants/Api';

const Signup = () => {

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',

    })

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(SIGNUP_API, {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,

        }).then(res => {
            console.log(res)
        })
    }

    return (
        <>

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{  padding: "150px" }}
            >

                <Grid item xs={3}>
                    <Card sx={{ width: "500px", height: "300px", alignContent: "center", margin: "center" }}>
                        <CardContent >
                            <Typography component="div" variant="h5">
                                Signup
                            </Typography>
                        </CardContent>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                label="First Name"
                                name="firstName"
                                type="text"
                                onChange={handleInputChange}
                                value={userData.firstName}
                            />
                            <TextField
                                label="Last Name"
                                name="lastName"
                                type="text"
                                onChange={handleInputChange}
                                value={userData.lastName}
                            />
                            <TextField
                                label="Email"
                                name="email"
                                type="text"
                                onChange={handleInputChange}
                                value={userData.email}
                            />
                            <TextField
                                label="Password"
                                name='password'
                                type="password"
                                onChange={handleInputChange}
                                value={userData.password}
                            />
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}


export default Signup;