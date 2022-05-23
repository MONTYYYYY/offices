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

const FormContainer = styled.form`
    display:flex;
    flex-direction: column;
`;

const OfficeColorsContainer = styled.div`
    width:100%;
    display:flex;
    button {
      margin: 20px 39px 20px 0px; 
    }
`;

const EditButtonGroupContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    margin-top: 20px;
`;
const OfficeStyles = {
  FormContainer,
  Container,
  OfficeColorsContainer,
  EditButtonGroupContainer,
};

export default OfficeStyles;
