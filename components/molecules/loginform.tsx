import { TextField, FormControlLabel, Checkbox, Button } from '@mui/material'
import styled from "@emotion/styled"
import Link from 'next/link'

const VerticalAlign = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    justify-content: space-between;
`

const FormHeader = styled.div`
    margin: 0;
    margin-bottom: .5rem;
    font-weight: 300;
    font-size: 2.5em;
`

const StyledCheckbox = styled(Checkbox)`
    margin: 1em 0;
`

const StyledPrompt = styled.div`
    text-align: center;
    margin-top: 2rem;
    font-size: .9rem;
`

const StyledTextField = styled(TextField)`
    margin-top: .6rem;
`

const StyledLink = styled(Link)`
    color: #1976D2;
`

const LoginForm = () => {
    return (<>
        <FormHeader>Login</FormHeader>
        <VerticalAlign>
            <StyledTextField variant='outlined' label="Email address" size='small' required/>
            <StyledTextField variant='outlined' label="Password" size='small' required/>
            <FormControlLabel control={<StyledCheckbox size='small'/>} label='Remember me'></FormControlLabel>
            <Button variant="contained" size='small'>Login</Button>
            <StyledPrompt>Don't have an account ? <StyledLink href="/signup">Signup</StyledLink></StyledPrompt>
        </VerticalAlign>
    </>)
}

export default LoginForm