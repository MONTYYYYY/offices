import styled from 'styled-components/macro';

const Container = styled.div`
    height:100%;
    width:100%;
    overflow: scroll;
    flex-direction: column;
    background: #EEF3F6;
    display:flex;
    padding: 20px 10px;
`;

const AddButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
const LandingStyles = {
  Container,
  AddButtonContainer,
};

export default LandingStyles;
