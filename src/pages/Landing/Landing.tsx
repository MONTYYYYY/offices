import React from 'react';
import LandingStyles from './styles';
import Cards from '../../components/cards/index';
import { useAppSelector } from '../../constants/helpers/hooks';
import { selectOffices } from '../../features/officesSlice';

function Landing() {
  const { offices } = useAppSelector(selectOffices);
  return (
    <LandingStyles.Container>
      <h1>All Offices</h1>
      {
        offices.map((office) => (
          <Cards.OfficeCard data={office} />
        ))
      }
    </LandingStyles.Container>
  );
}

export default Landing;
