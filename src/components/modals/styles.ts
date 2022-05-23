import styled from 'styled-components/macro';
import theme from '../../constants/theme';

interface IContainerProps {
  padding?: number | null;
}

const Container = styled.div<IContainerProps>`
    position: fixed;
    padding: ${(props) => props.padding || 20}px;
    top: 20%;
    margin: 0px 2%;
    z-index:100;
    overflow:scroll;
    /* background */
    background: #F9F9F9;
    box-shadow: 0px 9.19786px 13.7968px rgba(0, 0, 0, 0.06);
    border-radius: 16.0962px;

    .top {
        display:flex;
        justify-content:space-between;
        width:100%;
        .title {
          color: ${theme.COLORS.tertiary};
        }
        .exitButton {
          max-width: fit-content;
          text-align:right;
          flex :1;
          border:none;
          background:none;
          img {
            height:24px;
          }
          cursor:pointer;
        }
    }
`;
export const OverLay = styled.div` 
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(150, 157, 169,0.2);
    z-index: 50;
    overflow:scroll;
`;

const ModalStyles = {
  Container,
  OverLay,
};

export default ModalStyles;
