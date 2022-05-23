import styled from 'styled-components/macro';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .delete-stuff-button {
        margin: 20px 0px;
    }
`;

const DeleteConfirmationTitle = styled.span`
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    color: #000000;
`;

const AvatarsParentContainer = styled.div`
     margin: 20px 0px;
`;
const AvatarsContainer = styled.span`
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
`;

const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

interface IProgressIndicator {
    filled? : boolean;
}
const ProgressIndicator = styled.div<IProgressIndicator>`
    width: 4px;
    margin: 2px;
    height: 4px;
    border-radius: 50%;
    border: 1.5px solid #489DDA;
    background: ${(props) => (props.filled ? '#489DDA' : 'none')} ;
`;

const ProgressIndicatorContainer = styled.div<IProgressIndicator>`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px 0px;
`;

const StaffForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input {
      margin: 5px 0px;
  }
`;

const AvatarsTitle = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    color: #000000;
`;

const StaffModalStyles = {
  Container,
  DeleteConfirmationTitle,
  HeadingContainer,
  AvatarsParentContainer,
  AvatarsContainer,
  ProgressIndicator,
  ProgressIndicatorContainer,
  StaffForm,
  AvatarsTitle,
};

export default StaffModalStyles;
