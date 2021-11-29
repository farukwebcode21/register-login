import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegisterSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match');
            return;
        }
        e.preventDefault();
    }
    return (
        <div>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 10 }} item xs={12} md={12}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                     <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ width: '35%', m: 1 }}
                            id="standard-basic"
                            color="secondary"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnChange}

                        /><br />
                        <TextField
                            sx={{ width: '35%', m: 1 }}
                            color="secondary"
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}

                        />
                        <br />
                        <TextField
                            sx={{ width: '35%', m: 1 }}
                            color="secondary"
                            id="standard-basic"
                            label="Re-Type Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnChange}

                        />
                        <br />
                        <Button variant="contained" sx={{ width: '35%', m: 1 }} type="submit">Register</Button>
                        <br />
                        <NavLink to="/login" variant="text">Al-ready Register ? Please login</NavLink>
                    </form>

                </Grid>
            </Grid>
        </div>
    )
}

export default Register
