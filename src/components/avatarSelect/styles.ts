import styled from 'styled-components/macro';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const AvatarsContainer = styled.span`
    display:flex;
    justify-content : center;
    flex-wrap: wrap;
    align-items: flex-start;
    
    img {
        width: 100%;
        border-radius: 50%;
        height: 100%;
        &.selected {
            border: 4px solid #475569;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
        }
    }
`;

const AvatarButtonContainer = styled.button`
     width: 52px;
     background: none;
     border:none;
     border-radius: 50%;
     * {
        cursor: pointer;
     }
`;

const AvatarButtonOuterContainer = styled.div`
     width: 23%;
`;

const AvatarSelectStyles = {
  Container,
  AvatarsContainer,
  AvatarButtonContainer,
  AvatarButtonOuterContainer,
};

export default AvatarSelectStyles;
