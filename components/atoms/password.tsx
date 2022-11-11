import { useState } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const PasswordField = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (<>
        <TextField
        id='passwordInput' variant='outlined' label="Password" size='small' required
        type={showPassword ? "text" : "password"} // <-- This is where the magic happens
        InputProps={{ // <-- This is where the toggle button is added.
            endAdornment: (
            <InputAdornment position="end">
                <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                >
                {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
            )
        }}
        />
    </>)
}

export default PasswordField