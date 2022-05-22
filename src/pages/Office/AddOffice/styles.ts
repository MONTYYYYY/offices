import styled from 'styled-components/macro';

const Container = styled.div`
    align-items : center;
    height:100%;
    width:100%;
    overflow:scroll;
    background: #EEF3F6;
    display:flex;
    flex-direction:column;
    padding-top:20px;

    input {
      margin-bottom: 15px;
    }
`;

const OfficeColorsContainer = styled.div`
    width:100%;
    display:flex;
    button {
      margin: 20px 39px 20px 0px; 
    }
`;

const AddButtonContainer = styled.div`
    width:100%;
    display:flex;
    margin-top: 20px;
    justify-content: center;
`;
const OfficeStyles = {
  Container,
  OfficeColorsContainer,
  AddButtonContainer,
};

export default OfficeStyles;
