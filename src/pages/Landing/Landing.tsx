import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingStyles from './styles';
import Cards from '../../components/cards/index';
import { useAppSelector } from '../../constants/helpers/hooks';
import { selectOffices } from '../../features/officesSlice';
import Buttons from '../../components/common/buttons/index';
import { RouteList } from '../../routes';
import Images from '../../assets';

function Landing() {
  const navigate = useNavigate();
  const { offices } = useAppSelector(selectOffices);

  const handleNewOfficeClick = () => {
    navigate(RouteList.AddOffice);
  };
  return (
    <LandingStyles.Container>
      <h1 className="page-title">All Offices</h1>
      {
        offices.map((office) => (
          <Cards.OfficeCard key={office.email} data={office} />
        ))
      }
      <LandingStyles.AddButtonContainer>
        <Buttons.IconButton onClick={handleNewOfficeClick}>
          <img src={Images.Plus} alt="add" />
        </Buttons.IconButton>
      </LandingStyles.AddButtonContainer>
    </LandingStyles.Container>
  );
}

export default Landing;
