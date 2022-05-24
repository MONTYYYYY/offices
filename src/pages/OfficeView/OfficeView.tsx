import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../../components/cards';
import SearchBox from '../../components/searchBox/SearchBox';
import { useAppSelector, useAppDispatch } from '../../constants/helpers/hooks';
import { selectOffices, IOfficeInformation } from '../../features/officesSlice';
import OfficeViewStyles from './styles';
import { Avatars, IStaffInformation, selectStaff } from '../../features/staffSlice';
import Images from '../../assets';
import { EditButton } from '../../components/cards/OfficeCard/styles';
import { DisplayedModalOptions, setDisplayedModal } from '../../features/settingsSlice';
import { ModalDisplay } from '../../components/modals/Modal';
import Modals from '../../components/modals';
import { AddButtonContainer } from '../Landing/styles';
import Buttons from '../../components/common/buttons';

function OfficeView() {
  const dispatch = useAppDispatch();
  const { offices } = useAppSelector(selectOffices);
  const { staff } = useAppSelector(selectStaff);
  const { id } = useParams();
  const [searchText, setSearchText] = useState<string>('');

  const [officeViewed, setOfficeViewed] = useState<null|IOfficeInformation>(null);
  const [staffInOffice, setStaffInOffice] = useState<IStaffInformation[]>([]);
  const [filteredStaff, setFilteredStaff] = useState<IStaffInformation[]>(staffInOffice);
  const [hasReachedCapacity, setHasReachedCapacity] = useState<boolean>(false);

  useEffect(() => {
    setStaffInOffice(staff.filter((x) => offices.find((office) => office.id === id)?.staffIDs.includes(x.id)));
  }, [offices, staff]);

  useEffect(() => {
    setOfficeViewed(offices.find((office) => office.id === id) ?? null);
  }, [offices, id]);

  useEffect(() => {
    setHasReachedCapacity(officeViewed?.staffIDs.length.toString() === officeViewed?.officeCapacity.toString());
  }, [officeViewed, officeViewed?.staffIDs]);

  const handleClickEdit = (staffId: string) => {
    dispatch(setDisplayedModal({ option: DisplayedModalOptions.STAFF, payload: { staffId, officeId: id }, type: 'edit' }));
  };

  const handleNewStaffClick = () => {
    dispatch(setDisplayedModal({ option: DisplayedModalOptions.STAFF, payload: { officeId: id }, type: 'add' }));
  };

  useEffect(() => {
    const filteredOfficesByStaffCriteria = staffInOffice?.filter((staffMember: IStaffInformation) => (
      String(staffMember?.firstName).toLocaleLowerCase().trim().includes(searchText?.toLocaleLowerCase().trim())
      || String(staffMember?.lastName).toLocaleLowerCase().trim().includes(searchText?.toLocaleLowerCase().trim())
    ));
    setFilteredStaff(filteredOfficesByStaffCriteria);
  }, [searchText, staffInOffice]);

  return (
    <OfficeViewStyles.Container>
      <ModalDisplay modalName={DisplayedModalOptions.STAFF} Modal={Modals.Staff} />
      {officeViewed && (
      <Cards.OfficeCard
        key={officeViewed?.email}
        data={officeViewed}
      />
      )}
      <OfficeViewStyles.SearchBoxContainer>
        <SearchBox setSearchParentText={setSearchText} />
      </OfficeViewStyles.SearchBoxContainer>
      <OfficeViewStyles.StaffMembersContainer>
        <OfficeViewStyles.StaffMemberCountRow>
          <OfficeViewStyles.StaffMemberCountTitle>
            Staff Members in Office
          </OfficeViewStyles.StaffMemberCountTitle>
          <OfficeViewStyles.StaffMemberCountValue>
            {filteredStaff?.length}
          </OfficeViewStyles.StaffMemberCountValue>
        </OfficeViewStyles.StaffMemberCountRow>
        {
          filteredStaff.map((staffMember) => (
            <OfficeViewStyles.StaffMemberRow key={staffMember.id}>
              <OfficeViewStyles.AvatarAndFullNameContainer>
                <OfficeViewStyles.ProfileImage height={52} width={52} src={Avatars[staffMember.avatar]} />
                <OfficeViewStyles.FullNameContainer>
                  {staffMember.firstName}
                  {' '}
                  {staffMember.lastName}
                </OfficeViewStyles.FullNameContainer>
              </OfficeViewStyles.AvatarAndFullNameContainer>
              <OfficeViewStyles.EditButtonContainer>
                <EditButton onClick={() => handleClickEdit(staffMember.id)}>
                  <img src={Images.ThreeVerticalDots} alt="EditButton" />
                </EditButton>
              </OfficeViewStyles.EditButtonContainer>
            </OfficeViewStyles.StaffMemberRow>
          ))
        }
      </OfficeViewStyles.StaffMembersContainer>

      { !hasReachedCapacity && (
      <AddButtonContainer>
        <Buttons.IconButton onClick={handleNewStaffClick}>
          <img src={Images.Plus} alt="add" />
        </Buttons.IconButton>
      </AddButtonContainer>
      )}
    </OfficeViewStyles.Container>
  );
}

export default OfficeView;
