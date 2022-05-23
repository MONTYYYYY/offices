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

function EditOffice() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const { offices } = useAppSelector(selectOffices);
  const { id } = useParams();
  const selectedOffice = offices.find((office) => office.id === id);
  const [office, setOffice] = useState<IOfficeInformation>(selectedOffice || {} as IOfficeInformation);

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
    }
  };

  return (
    <EditOfficeStyles.Container>
      <div>
        <EditOfficeStyles.FormContainer>
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
        <b> Office Color </b>
        <OfficeColorSelect setSelectedParentColor={setSelectedColor} selectedParentColor={office.color} />
      </div>
      <EditOfficeStyles.EditButtonGroupContainer>
        <Buttons.PrimaryButton onClick={handleUpdateOffice}>
          Update Office
        </Buttons.PrimaryButton>
        <Buttons.TextButton onClick={handleDeleteOffice}>
          Delete Office
        </Buttons.TextButton>
      </EditOfficeStyles.EditButtonGroupContainer>
    </EditOfficeStyles.Container>
  );
}

export default EditOffice;
