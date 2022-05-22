import styled from 'styled-components/macro';

const Body = styled.main`
    display:flex;
    flex-direction:column;
    height:100vh;
    width:100vw;
`;

const Header = styled.header`
    display:flex;
    flex:1;
    width: 100%;
    position: sticky;
    top:0;
    background: #EEF3F6;
`;
const HeaderTitle = styled.h3`
  font-weight: 500;
  margin-left: 100px;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  white-space: nowrap;
`;
const Bottom = styled.div`
    flex:10;
    background: #EEF3F6;
`;

const BackButtonIcon = styled.img`

`;

const HeaderStyles = {
  Header,
  BackButtonIcon,
  Body,
  Bottom,
  HeaderTitle,
};

export default HeaderStyles;
