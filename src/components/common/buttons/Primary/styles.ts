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
  background: ${(props) => props.background || Theme.COLORS.primary};
  color: ${(props) => props.color || 'white'};
  height: ${(props) => props.height || 62}px;
  width: ${(props) => props.width || 309}px;
  margin: ${(props) => props.margin || 'none'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  box-shadow: ${(props) => props.boxShadow || '0px 2px 10px #0000001A'};
  cursor:pointer;
  border:none;
  border-radius:40px;
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
