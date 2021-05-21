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
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/login-hero.svg"></img>
                </Hero>

                <Form>
                    <Google>
                        <img src="/images/google.svg" alt="Google logo"></img>
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
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
    border-radius:25px;
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

const Section = styled.div`
    display: flex;
    align-content: flex-start; // for flex containers - comment and the align elements gets everything in middle
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;    // wrap the image under the text @ small screens
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto; // center the elements inside the container automatically
    @media (max-width: 768px){
        margin: auto;
        min-height: 0px;
    }
`

const Hero = styled.div`
    width: 100%;
    h1 {
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        @media (max-width: 768px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }

    img {
        // z-index: -1;
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media (max-width: 768px){
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`;

const Form = styled.div`
    margin-top: 100px;
    width: 400px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const Google = styled.button`
    display: flex; 
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 30px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);

    vertical-align: middle;
    z-index:0;
    transition-duration: 176ms; // this is for hovering
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, .75)
    }
`;
export default Login;