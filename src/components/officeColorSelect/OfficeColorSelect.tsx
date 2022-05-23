import React, { useEffect, useState } from 'react';
import { OFFICE_COLORS } from '../../features/officesSlice';
import Buttons from '../common/buttons';
import OfficeColorSelectStyles from './styles';

interface IOfficeColorSelectProps {
  setSelectedParentColor : React.Dispatch<React.SetStateAction<string>>;
  selectedParentColor: string;
}

function OfficeColorSelect({ setSelectedParentColor, selectedParentColor = '' } :IOfficeColorSelectProps) {
  const [selectedColor, setSelectedColor] = useState<string>(selectedParentColor);
  const handleColorClick = (name: string) => {
    setSelectedColor(name);
    setSelectedParentColor(name);
  };

  useEffect(() => {
    setSelectedParentColor(selectedColor);
  }, [selectedColor]);

  return (
    <OfficeColorSelectStyles.Container>
      <OfficeColorSelectStyles.ColorsContainer>
        {
        OFFICE_COLORS.map((color) => (
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
