import React, { useEffect, useState } from 'react';
import Buttons from '../common/buttons';
import OfficeColorSelectStyles from './styles';

interface IOfficeColorSelectProps {
  setSelectedParentColor : React.Dispatch<React.SetStateAction<string>>;
  selectedParentColor: string;
}

function OfficeColorSelect({ setSelectedParentColor, selectedParentColor = '' } :IOfficeColorSelectProps) {
  const colors: string[] = [
    '#FFBE0B',
    '#FF9B71',
    '#FB5607',
    '#97512C',
    '#FF006E',
    '#A9F0D1',
    '#00B402',
    '#489DDA',
    '#0072E8',
    '#8338EC',
  ];
  const [selectedColor, setSelectedColor] = useState<string>(selectedParentColor);
  const handleColorClick = (name: string) => {
    setSelectedColor(name);
  };

  useEffect(() => {
    setSelectedParentColor(selectedColor);
  }, [selectedColor]);

  return (
    <OfficeColorSelectStyles.Container>
      <OfficeColorSelectStyles.ColorsContainer>
        {
        colors.map((color) => (
          <OfficeColorSelectStyles.ColorButtonOuterContainer key={color}>
            <OfficeColorSelectStyles.ColorButtonContainer onClick={() => handleColorClick(color)}>
              <Buttons.IconButton height={32} width={32} className={selectedColor === color ? 'selected' : ''} background={color} />
            </OfficeColorSelectStyles.ColorButtonContainer>
          </OfficeColorSelectStyles.ColorButtonOuterContainer>
        ))
      }
      </OfficeColorSelectStyles.ColorsContainer>
    </OfficeColorSelectStyles.Container>
  );
}

export default OfficeColorSelect;
