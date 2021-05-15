import styled from 'styled-components';

/* arrow function here for the FUNCTION component  */ 
/* here we return the html >> JSX really we are writing in javascript files */
/* props here is an input: https://reactjs.org/docs/components-and-props.html */
const Login = (props) => {
    /* return <div> Login </div> */
    return(
        <Container>
            <Nav>
                <a href="/"> 
                    <img src="/images/login-logo.svg" alt="Logo"></img> 
                </a>
                <div>
                    <Join>
                        Join Now
                    </Join>
                    <SignIn>
                        Sign in
                    </SignIn>
                </div>
            </Nav>
        </Container>
    );
}

// add styling
// without this we get an error : 'Container' is not defined.
const Container = styled.div`
    padding: 0px;
`;
const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;
    & > a {
        // background-color: red;
        width: 135px;
        height: 34px;
        @media (max-width: 768px){
            padding: 0 5px; // top and bottom: 0px & right and left: 5px
        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius:4px;
    color: rgba(0, 0, 0, 0.6);  
    margin-right: 12px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
        cursor: pointer;
    } 
    
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 200ms; // for hovering later on
    font-size: 16px;
    font-weight: 600;
    line-height: 40px; // space above and below inline elements
    padding: 10px 24px;
    // till now the sign in is split in half >> fix that later?
    text-align: center;
    background-color: rgba(0,0,0,0);
    &:hover{
        background-color: rgba(112,181,249,0.15);
        color: #0a66c2;
        text-decoration: none;
        cursor: pointer;
    }

`;
export default Login;