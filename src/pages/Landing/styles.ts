import styled from 'styled-components/macro';
import SCREEN_SIZES from '../../constants/MediaQueries';

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
      width: 342px;
    }

    .page-title {
      @media (max-width: ${SCREEN_SIZES.TABLET_MAX}px){
        align-self : center;
      }
      @media (min-width: ${SCREEN_SIZES.LAPTOP_MIN}px){
        margin-left: 20px;
      }
    }
`;

export const OfficeCardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (min-width: ${SCREEN_SIZES.LAPTOP_MIN}px){
    align-content: flex-start;
    flex-wrap: wrap;
  }
  @media (max-width: ${SCREEN_SIZES.TABLET_MAX}px){
    align-items : center;
    flex-direction: column;
  }

`;

export const AddButtonContainer = styled.div`
  position: absolute;
  right: 6%;
  bottom: 2%;
`;
const LandingStyles = {
  Container,
  OfficeCardsContainer,
  AddButtonContainer,
};

export default LandingStyles;
