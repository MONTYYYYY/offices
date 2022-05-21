import styled from 'styled-components/macro';

const Body = styled.main`
    display:flex;
    flex-direction:column;
    height:100vh;
    width:100vw;
`;

const Header = styled.header`
    flex:1;
    width: 100%;
`;

const Bottom = styled.div`
    flex:10;
    background: #D8D8D8;
`;

const Logo = styled.img`
  width: 116.85px;
  height: 24.44px;
  position: absolute;
  top: 2%;
  left: 2%;
`;

const HeaderStyles = {
  Header,
  Logo,
  Body,
  Bottom,
};

export default HeaderStyles;
