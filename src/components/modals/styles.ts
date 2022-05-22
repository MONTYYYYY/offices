import styled from 'styled-components/macro';
import theme from '../../constants/theme';

interface IContainerProps {
  padding?: number | null;
}

const Container = styled.div<IContainerProps>`
    position: fixed;
    padding: ${(props) => props.padding || 84}px;
    width: 100%;
    top: 25%;
    bottom: 15%;
    left: 10%;
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
    .ant-upload {
      img {
        width:100%;
        height:100%;
      }
    }

`;
export const OverLay = styled.div` 
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(48, 43, 112, 0.2);
    z-index: 50;
    overflow:scroll;
`;

const ModalStyles = {
  Container,
  OverLay,
};

export default ModalStyles;
