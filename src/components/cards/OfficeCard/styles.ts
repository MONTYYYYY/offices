import styled from 'styled-components/macro';

const Container = styled.div`
    width: 342px;
    min-height: 132px;
    background: #FFFFFF;
    border: 1px solid #E8F3FC;
    border-radius: 8px;
`;
const ColorContainer = styled.div`
    width: 12px;
    height: 100%;
    background: black;
`;
const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    background: green;
`;
const OfficeCardStyles = {
  ColorContainer,
  ContentContainer,
  Container,
};

export default OfficeCardStyles;
