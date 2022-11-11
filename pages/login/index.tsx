import { LeftAlignedDiv } from "@components/layouts/argon";
import { LoginCard, LoginHeader, LoginSubtext } from "@components/atoms/login";
import LoginForm from "@components/molecules/loginform";



const Login = () => {

    return (<>
        <LeftAlignedDiv>
            <img src="login-bg-01.jpg" alt="" className="bg" />
            <LoginHeader>GAITSCRIBE</LoginHeader>
            <LoginSubtext>An Ortho Assits</LoginSubtext>
            <LoginCard elevation={3}>
                <LoginForm/>
            </LoginCard>
        </LeftAlignedDiv>
    </>)

}


export default Login