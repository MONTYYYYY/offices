import React from 'react';
import { useNavigate } from 'react-router-dom';
import Images from '../assets/index';
import Buttons from '../components/common/buttons';
import HeaderStyles from './styles';

interface IHeaderProps {
  title : string;
  component: React.FunctionComponent;
}
function Header({ title = '', component: Component }:IHeaderProps) {
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate(-1);
  };
  return (
    <HeaderStyles.Body>
      <HeaderStyles.Header>
        <div className="d-flex center-child-items">
          <Buttons.TextButton onClick={handleNavigateBack}>
            <HeaderStyles.BackButtonIcon src={Images.ArrowLeft} />
          </Buttons.TextButton>
          <HeaderStyles.HeaderTitle>{title}</HeaderStyles.HeaderTitle>
        </div>
      </HeaderStyles.Header>
      <HeaderStyles.Bottom>
        <Component />
      </HeaderStyles.Bottom>
    </HeaderStyles.Body>
  );
}

export default Header;
