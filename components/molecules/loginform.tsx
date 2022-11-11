import { TextField, Grid } from '@mui/material'
import styled from "@emotion/styled"

const VerticalAlign = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 130px;
    justify-content: space-between;
`

const FormHeader = styled.div`
    margin: 0;
    margin-bottom: .5em;
    font-weight: 300;
    font-size: 2.5em;
`

const LoginForm = () => {
    return (<>
        <FormHeader>Login</FormHeader>
        <VerticalAlign>
            <TextField variant='outlined' label="Email address" size='small' required/>
            <TextField variant='outlined' label="Password" size='small' required/>
        </VerticalAlign>
    </>)
}

export default LoginForm