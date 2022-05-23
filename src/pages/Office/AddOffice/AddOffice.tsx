import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import AddOfficeStyles from './styles';
import { addOffice, IOfficeInformation } from '../../../features/officesSlice';
import Input from '../../../components/common/Input/styles';
import Buttons from '../../../components/common/buttons';
import OfficeColorSelect from '../../../components/officeColorSelect/OfficeColorSelect';
import { useAppDispatch } from '../../../constants/helpers/hooks';
import { RouteList } from '../../../routes';

function AddOffice() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const defaultOffice : IOfficeInformation = {
    id: uuidv4(),
    companyName: '',
    staffIDs: [],
    email: '',
    phone: '',
    location: '',
    officeCapacity: 1,
    color: '',
  };
  const [office, setOffice] = useState<IOfficeInformation>(defaultOffice);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [displayNextActionButton, setDisplayAddActionButton] = useState<boolean>(false);

  useEffect(() => {
    // Check if all values are filled
    if (Object.values(office).length > 0) {
      const mandatoryValues = [
        office.color,
        office.companyName,
        office.location,
        office.phone,
        office.email,
      ];
      setDisplayAddActionButton(mandatoryValues.every((x) => x.length > 0));
    }
  }, [office]);

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

  useEffect(() => {
    setOffice({ ...office, color: selectedColor });
  }, [selectedColor]);

  const handleAddOffice = () => {
    dispatch(addOffice(office));
    navigate(RouteList.Landing);
  };

  const onSubmit = (event:any) => {
    event.preventDefault();
  };

  return (
    <AddOfficeStyles.Container>
      <div>
        <AddOfficeStyles.FormContainer onSubmit={onSubmit}>
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
            min={1}
            name="officeCapacity"
            type="number"
            value={office?.officeCapacity}
            placeholder="Maximum Capacity"
            onChange={(e) => handleInputChange(e)}
          />
          <AddOfficeStyles.ColourTitle> Office Colour </AddOfficeStyles.ColourTitle>
          <OfficeColorSelect setSelectedParentColor={setSelectedColor} selectedParentColor="" />
        </AddOfficeStyles.FormContainer>

      </div>
      { displayNextActionButton && (
      <AddOfficeStyles.AddButtonContainer onClick={handleAddOffice}>
        <Buttons.PrimaryButton>
          Add Office
        </Buttons.PrimaryButton>
      </AddOfficeStyles.AddButtonContainer>
      )}
    </AddOfficeStyles.Container>
  );
}

export default AddOffice;
