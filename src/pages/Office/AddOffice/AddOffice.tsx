import React, { useState } from 'react';
import AddOfficeStyles from './styles';
import { IOfficeInformation } from '../../../features/officesSlice';
import Input from '../../../components/common/Input/styles';
import Buttons from '../../../components/common/buttons';

function AddOffice() {
  const [office, setOffice] = useState<IOfficeInformation>({} as IOfficeInformation);
  const colorIconHeightPx = 24;
  const colorIconWidthPx = 24;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    const { name } = e.target;

    switch (name) {
      case 'title':
        // Capitalize 1st letter
        value = ((value?.charAt(0) || '').toLocaleUpperCase() + value.slice(1))?.replace(/[^A-Za-z]/g, '');
        break;
      case 'email':
        value = value.toLocaleLowerCase()?.trim();
        break;
      case 'phone':
        value = value?.toString()?.trim();
        break;
      default:

        break;
    }
    setOffice({ ...office, [name]: value });
  };
  return (
    <AddOfficeStyles.Container>
      <div>
        <div>
          <Input
            name="companyName"
            type="text"
            value={office?.companyName}
            placeholder="Enter Company Name"
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            name="email"
            type="email"
            value={office?.email}
            placeholder="Enter Email"
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            name="location"
            type="text"
            value={office?.location}
            placeholder="Enter Location"
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            name="location"
            type="text"
            value={office?.officeCapacity}
            placeholder="Enter Office Capacity"
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            name="staffCount"
            type="number"
            value={office?.staffCount}
            placeholder="Enter Staff Count"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <b> Office Color </b>
        <AddOfficeStyles.OfficeColorsContainer>
          <Buttons.IconButton className="selected" width={colorIconHeightPx} height={colorIconWidthPx} background="red" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="blue" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="yellow" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="red" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="blue" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="blue" />
        </AddOfficeStyles.OfficeColorsContainer>
        <AddOfficeStyles.OfficeColorsContainer>
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="yellow" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="yellow" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="red" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="yellow" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="red" />
        </AddOfficeStyles.OfficeColorsContainer>
      </div>
      <AddOfficeStyles.AddButtonContainer>
        <Buttons.PrimaryButton>
          Add Office
        </Buttons.PrimaryButton>
      </AddOfficeStyles.AddButtonContainer>
    </AddOfficeStyles.Container>
  );
}

export default AddOffice;
