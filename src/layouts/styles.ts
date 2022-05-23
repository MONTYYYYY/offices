import styled from 'styled-components/macro';
import SCREEN_SIZES from '../constants/MediaQueries';

const Body = styled.main`
    display:flex;
    flex-direction:column;
    height:100vh;
    width:100vw;
    overflow-y: scroll;
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

const HeaderGroup = styled.span`
 display:flex;

 @media (max-width: ${SCREEN_SIZES.MOBILE_MAX}px){
    width: 233px;
 }
 @media (min-width: ${SCREEN_SIZES.TABLET_MIN}px){
    align-self: center;
    width: 85%;
 }

`;

const HeaderStyles = {
  Header,
  HeaderGroup,
  BackButtonIcon,
  Body,
  Bottom,
  HeaderTitle,
};

export default HeaderStyles;
