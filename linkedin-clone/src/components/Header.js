import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg"></img>
                    </a>
                </Logo>

                <Search>
                    
                </Search>
            </Content>
        </Container>

    );
}

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    left: 0;
    padding: 0 24px;
    position: fixed; // the header always appearing
    top:0;
    width: 100vw;
    z-index: 100;
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`;

const Logo = styled.div``;
export default Header;