import styled from 'styled-components/macro';

const Container = styled.div`
    height:100%;
    width:100%;
    overflow: scroll;
    flex-direction: column;
    background: #EEF3F6;
    display:flex;
    padding: 0px 10px;

    .page-title {
      position: sticky;
      top: 0;
      background: #eef3f6;
      padding: 10px 0px;
    }
`;

export const AddButtonContainer = styled.div`
  position: absolute;
  right: 6%;
  bottom: 2%;
`;
const LandingStyles = {
  Container,
  AddButtonContainer,
};

export default LandingStyles;
