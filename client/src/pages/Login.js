import { useEffect, useState } from 'react'
import TextField from '../components/Textfield'
import { Box, Button, Card, Container } from '@mui/material'
import axios from 'axios'

const Login = () => {

    const [userData, setUserData] = useState({
        userName: '',
        password: ''
    })

    // const data = axios.get('http://localhost:3000/getlogin').then(res => {
    //     console.log(res.data)
    // })
   

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/postdata', {
            userName:userData.userName,
            password:userData.password
        }).then(res => {
            console.log(res)
        })
    }

    return (
        <> <Container component="main" maxWidth="xs">
            <Card style={{ marginTop: "280px", height: "100%", width: "100%" }} ><Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <TextField
                    label="Username"
                    name="userName"
                    type="text"
                    onChange={handleInputChange}
                    value={userData.userName}
                />
                <TextField
                    label="Password"
                    name='password'
                    type="password"
                    onChange={handleInputChange}
                    value={userData.password}

                />
                <Button variant="contained" onClick={handleSubmit}>Login</Button>

            </Box></Card></Container>
        </>
    )
}


export default Login;