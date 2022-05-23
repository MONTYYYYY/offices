import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditOfficeStyles from './styles';
import {
  IOfficeInformation, removeOffice, selectOffices, updateOffice,
} from '../../../features/officesSlice';
import Input from '../../../components/common/Input/styles';
import Buttons from '../../../components/common/buttons';
import { useAppDispatch, useAppSelector } from '../../../constants/helpers/hooks';
import OfficeColorSelect from '../../../components/officeColorSelect/OfficeColorSelect';
import { RouteList } from '../../../routes';
import { ColourTitle } from '../AddOffice/styles';
import Theme from '../../../constants/theme';

function EditOffice() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const { offices } = useAppSelector(selectOffices);
  const { id } = useParams();
  const selectedOffice = offices.find((office) => office.id === id);
  const [office, setOffice] = useState<IOfficeInformation>(selectedOffice || {} as IOfficeInformation);
  const [displayNextActionButton, setDisplayAddActionButton] = useState<boolean>(false);

  useEffect(() => {
    // Check if all values are filled
    if (Object.values(office).length > 0) {
      const mandatoryValues = [
        office.color,
        office.companyName,
        office.location,
        office.officeCapacity,
        office.phone,
        office.email,
      ];
      setDisplayAddActionButton(mandatoryValues.every((x) => (x || '').toString().length > 0));
    }
  }, [office]);

  useEffect(() => {
    setOffice({ ...office, color: selectedColor });
  }, [selectedColor]);

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

  const handleDeleteOffice = () => {
    if (id) {
      dispatch(removeOffice(id));
      navigate(RouteList.Landing);
    }
  };

  const handleUpdateOffice = () => {
    if (id && office) {
      dispatch(updateOffice({ officeId: id, officeItem: office }));
      navigate(RouteList.Landing);
    }
  };

  const onSubmit = (event:any) => {
    event.preventDefault();
  };

  return (
    <EditOfficeStyles.Container>
      <div>
        <EditOfficeStyles.FormContainer onSubmit={onSubmit}>
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
            name="phone"
            type="text"
            value={office?.phone}
            placeholder="Phone Number"
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
            name="officeCapacity"
            type="number"
            value={office?.officeCapacity}
            placeholder="Maximum Capacity"
            onChange={(e) => handleInputChange(e)}
          />
        </EditOfficeStyles.FormContainer>
        <ColourTitle> Office Colour </ColourTitle>
        <OfficeColorSelect setSelectedParentColor={setSelectedColor} selectedParentColor={office.color} />
      </div>
      <EditOfficeStyles.EditButtonGroupContainer>
        {displayNextActionButton && (
        <Buttons.PrimaryButton onClick={handleUpdateOffice}>
          Update Office
        </Buttons.PrimaryButton>
        )}
        <Buttons.TextButton color={Theme.COLORS.primary} onClick={handleDeleteOffice}>
          Delete Office
        </Buttons.TextButton>
      </EditOfficeStyles.EditButtonGroupContainer>
    </EditOfficeStyles.Container>
  );
}

export default EditOffice;
