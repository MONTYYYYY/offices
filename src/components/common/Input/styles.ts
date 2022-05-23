import styled from 'styled-components/macro';
import SCREEN_SIZES from '../../../constants/MediaQueries';

const Input = styled.input`
  background: #ffffff;
  color: rgba(30, 41, 59, 0.6);
  width: 313px;
  font-weight: 400;
  height: 48px;
  text-indent: 10px;
  border: 1px solid #F1F9FF;
  border-radius: 8px;
  opacity: 1;
  font-size: 16px;
  line-height: 24px;

  @media (min-width: ${SCREEN_SIZES.TABLET_MIN}px){
      width: 100%;
  }
`;

export default Input;
