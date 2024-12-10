import { useEffect, useState } from 'react'
import TextField from '../components/Textfield'
import { Box, Button, Card, CardActionArea, CardMedia, CardContent, Container, Grid, Typography, CardActions, CardHeader } from '@mui/material'
import axios from 'axios'
import { LOGIN_API } from '../constants/Api'
// import {  useNavigate } from 'react-router-dom';





const Login = () => {

    const [userData, setUserData] = useState({
        userName: '',
        password: '',
        userLoginData:''
    })
    // const navgate = useNavigate()
    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
 
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(LOGIN_API).then(res => {
            setUserData({...userData,userLoginData : res.data})
            console.log(res.data)
            // navgate('/dashboard')
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
                style={{ padding: "150px" }}
            >

                <Grid item xs={3}>
                    <Card sx={{ width: "500px", height: "300px", alignContent: "center", margin: "center" }}>
                        <CardContent >
                            <Typography component="div" variant="h5">
                                Login
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
                        <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}


export default Login;