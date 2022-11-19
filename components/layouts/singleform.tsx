// Layout for pages with a single form. Login, Signup, etc.

import { BackgroundHeader, BackgroundSubtext } from "../atoms/typography"
import { StyledBackgroundImage, LeftAlignedDiv } from "../atoms/background"

import React from "react"


interface LayoutProps {
    children: React.ReactNode[] | React.ReactNode
}


const SingleFormLayout: React.FC<LayoutProps> = (props) => {

    return (<>
        <LeftAlignedDiv>
            <StyledBackgroundImage src="login-bg-01.jpg" alt="background image"/>
            <BackgroundHeader>GAITSCRIBE</BackgroundHeader>
            <BackgroundSubtext>An Ortho Assits</BackgroundSubtext>
            {props.children}
        </LeftAlignedDiv>
    </>)

}

export default SingleFormLayout