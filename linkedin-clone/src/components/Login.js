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
    color: grey;
    font-weight: 800;   
    
`;

export default Login;