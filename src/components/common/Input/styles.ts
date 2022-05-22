import styled from 'styled-components/macro';
import { Theme } from '../../../constants/theme';

const Input = styled.input`
  background: #ffffff;
  color: black;
  width: 352px;
  height: 40px;
  text-indent: 10px;
  border: 1px solid ${Theme.COLORS.primary};
  border-radius: 5px;
  opacity: 1;
`;

export default Input;
