import React, { useState } from 'react';
import AddOfficeStyles from './styles';
import { IOfficeInformation } from '../../../features/officesSlice';
import Input from '../../../components/common/Input/styles';
import Buttons from '../../../components/common/buttons';
import OfficeColorSelect from '../../../components/officeColorSelect/OfficeColorSelect';

function AddOffice() {
  const [office, setOffice] = useState<IOfficeInformation>({} as IOfficeInformation);
  const [selectedColor, setSelectedColor] = useState<string>('');
  console.log('Add Office', selectedColor);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    const { name } = e.target;

    switch (name) {
      case 'companyName':
        // Capitalize 1st letter
        value = ((value?.charAt(0) || '').toLocaleUpperCase() + value.slice(1));
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
        <AddOfficeStyles.FormContainer>
          <Input
            name="companyName"
            type="text"
            value={office?.companyName}
            placeholder="Office Name"
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            name="location"
            type="text"
            value={office?.location}
            placeholder="Physical Address"
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            name="email"
            type="email"
            value={office?.email}
            placeholder="Email Address"
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            name="phone"
            type="text"
            value={office?.phone}
            placeholder="Phone Number"
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            name="location"
            type="text"
            value={office?.officeCapacity}
            placeholder="Maximum Capacity"
            onChange={(e) => handleInputChange(e)}
          />
        </AddOfficeStyles.FormContainer>
        <b> Office Color </b>
        <OfficeColorSelect setSelectedParentColor={setSelectedColor} selectedParentColor="" />
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
