import styled from "@emotion/styled"
import { Paper, Checkbox, TextField } from "@mui/material"
import Link from 'next/link'


export const LoginHeader = styled.h1`
  font-size: 6em;
  font-weight: 500;
  margin: 0;
  margin-bottom: .4rem;
  letter-spacing: 5px;
`;

export const LoginSubtext = styled.p`
  font-size: 2em;
  margin: 0;
  margin-left: .2em;
`;

export const LoginCard = styled(Paper)`
  width: fit-content;
  margin-top: 2.5rem;
  padding: 3.5rem 4.5rem;
`;

export const FormHeader = styled.div`
    margin: 0;
    margin-bottom: .5rem;
    font-weight: 300;
    font-size: 2.5em;
`

export const StyledCheckbox = styled(Checkbox)`
    margin: 1em 0;
`

export const StyledPrompt = styled.div`
    text-align: center;
    margin-top: 2rem;
    font-size: .9rem;
`

export const StyledTextField = styled(TextField)`
    margin-top: .6rem;
    margin-bottom: .6rem;
`

export const StyledLink = styled(Link)`
    color: #1976D2;
`