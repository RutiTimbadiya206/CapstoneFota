import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS files/LoginPage.css';
import logo from './../assets/Logo.png';
import { Button, TextField, InputLabel, styled, Typography } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const StyledTypography = styled(Typography)({
    marginLeft: '10px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: '10px',
});

const StyledInputLabel = styled(InputLabel)({
    fontWeight: 'bold',
    color: 'white',
    marginLeft: '10px',
    fontSize: 15,
});

const StyledTextField = styled(TextField)({
    marginLeft: '10px',
    width: '400px',
    background: 'white',
});

const StyledButton = styled(Button)({
    margin: 'auto',
    width: '160px',
});

const LoginPage = () => {
    const navigate = useNavigate(); // Access the history object from react-router-dom

    // State variables to store the form inputs and navigation state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic or API call here
        // For example, check if the email and password are valid
        if (email === 'example@example.com' && password === 'password') {
            // Navigate to the desired page after successful login
            navigate('/dashboard'); // Replace '/dashboard' with the actual URL of your dashboard page
        } else {
            // Display an error message or handle login failure
            console.log('Invalid credentials');
        }
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="card">
            <div className="card-left">
                <img src={logo} alt="Logo" />
            </div>
            <div className="card-right">
                <div className="form">
                    <StyledTypography variant='h4'>Sign In</StyledTypography>
                    <StyledInputLabel htmlFor="username">Username</StyledInputLabel>
                    <StyledTextField
                        margin='normal'
                        type="text"
                        variant='filled'
                        placeholder='Username'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <StyledInputLabel htmlFor="password">Password</StyledInputLabel>
                    <StyledTextField
                        margin="normal"
                        type={showPassword ? 'text' : 'password'}
                        variant="filled"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePassword} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <StyledButton variant="contained" sx={{ marginTop: 4, backgroundColor: '#0F3F34' }} onClick={handleSubmit}>Login</StyledButton>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
