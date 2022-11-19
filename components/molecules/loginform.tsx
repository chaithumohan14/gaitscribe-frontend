import { FormControlLabel, Button } from '@mui/material'
import styled from "@emotion/styled"
import PasswordField from '@components/atoms/password'
import { FormHeader, StyledCheckbox, StyledLink, StyledPrompt, StyledTextField } from '@components/atoms/login'
import Router from 'next/router'


const LoginInputsSection = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    justify-content: space-between;
`
async function postToLogin(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const payload = {
        email: form.emailInput.value,
        password: form.passwordInput.value,
        rememberMe: form.rememberMe.checked
    }
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    if (response.status == 200 || true) { // || true for demonstration purposes
        Router.push('/dashboard')
    } 

    const errorMessage = (await response.json()).message
    
    console.log(payload, errorMessage);
}

// min length 8

const LoginForm = () => {
    return (<>
        <FormHeader>Login</FormHeader>
        <LoginInputsSection onSubmit={postToLogin}>
            <StyledTextField type={'email'} id='emailInput' variant='outlined' label="Email address" size='small' required/>
            <PasswordField />
            <FormControlLabel control={<StyledCheckbox size='small'  id='rememberMe'/>} label='Remember me'></FormControlLabel>
            <Button type='submit' variant="contained" size='small'>Login</Button>
            <StyledPrompt>Don't have an account ? <StyledLink href="/signup">Signup</StyledLink></StyledPrompt>
        </LoginInputsSection>
    </>)
}

export default LoginForm