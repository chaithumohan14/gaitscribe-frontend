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
        type={showPassword ? "text" : "password"} 
        inputProps={{
            minLength: 8,
        }} 
        // for some reason, this inputProps cannot be merged with the below inputProps that has the InputAdornment. 
        // outlined in this solution https://stackoverflow.com/a/64127384
        InputProps={{ 
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