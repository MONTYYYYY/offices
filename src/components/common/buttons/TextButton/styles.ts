import styled from 'styled-components/macro';
import { Theme } from '../../../../constants/theme';

interface IButtonProps {
  height?:number;
  width?:number;
  color?: string;
  background?: string;
  boxShadow?: string;
  margin?: string;
  fontWeight?: number|string;
}

export const Button = styled.button<IButtonProps>`
  min-width: 100px;
  padding : 5px;
  margin: ${(props) => props.margin || 'none'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  cursor:pointer;
  border:none;
  background: none;
  border-radius:5px;
  &:hover {
    color: ${Theme.COLORS.primary};
    background:white;
    border: 2px solid ${Theme.COLORS.primary};
  }
  * {
    :hover {
      cursor: pointer;
    }
  }
`;

export default Button;
