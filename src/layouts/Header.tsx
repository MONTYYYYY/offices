import React from 'react';
import Images from '../assets/index';
import HeaderStyles from './styles';

interface IHeaderProps {
  component: React.FunctionComponent;
}
function Header({ component: Component }:IHeaderProps) {
  return (
    <HeaderStyles.Body>
      <HeaderStyles.Header>
        <HeaderStyles.Logo src={Images.Search} />
      </HeaderStyles.Header>
      <HeaderStyles.Bottom>
        <Component />
      </HeaderStyles.Bottom>
    </HeaderStyles.Body>
  );
}

export default Header;
