import styled from "@emotion/styled"
import { Paper } from "@mui/material"


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