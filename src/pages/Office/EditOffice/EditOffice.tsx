import React, { useState } from 'react';
import EditOfficeStyles from './styles';
import { IOfficeInformation } from '../../../features/officesSlice';
import Input from '../../../components/common/Input/styles';
import Buttons from '../../../components/common/buttons';

function EditOffice() {
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
    <EditOfficeStyles.Container>
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
        <EditOfficeStyles.OfficeColorsContainer>
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="red" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="blue" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="yellow" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="red" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="blue" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="blue" />
        </EditOfficeStyles.OfficeColorsContainer>
        <EditOfficeStyles.OfficeColorsContainer>
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="yellow" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="yellow" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="red" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="yellow" />
          <Buttons.IconButton width={colorIconHeightPx} height={colorIconWidthPx} background="red" />
        </EditOfficeStyles.OfficeColorsContainer>
      </div>
      <EditOfficeStyles.EditButtonGroupContainer>
        <Buttons.PrimaryButton>
          Update Office
        </Buttons.PrimaryButton>
        <Buttons.TextButton>
          Delete Office
        </Buttons.TextButton>
      </EditOfficeStyles.EditButtonGroupContainer>
    </EditOfficeStyles.Container>
  );
}

export default EditOffice;
