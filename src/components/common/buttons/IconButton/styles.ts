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

const Button = styled.button<IButtonProps>`
  width: ${(props) => props.width || '64'}px;
  height:  ${(props) => props.height || '64'}px;
  padding : 5px;
  margin: ${(props) => props.margin || 'unset'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  cursor:pointer;
  border:none;
  background:${(props) => props.background || '#0D4477'} ;
  border-radius:50%;
  
  &.selected {
    border: 4px solid #475569;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  }

  &:hover {
    color: ${Theme.COLORS.primary};
  }

  * {
    :hover {
      cursor: pointer;
    }
  }
`;

export default Button;
