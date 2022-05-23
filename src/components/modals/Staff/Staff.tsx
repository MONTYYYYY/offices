/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Images from '../../../assets';
import { useAppSelector, useAppDispatch } from '../../../constants/helpers/hooks';
import { addStaffToOffice, removeStaffFromOffice } from '../../../features/officesSlice';
import {
  DisplayedModalOptions, ModalTypeOptions, selectSettings, setDisplayedModal,
} from '../../../features/settingsSlice';
import HeaderStyles from '../../../layouts/styles';
import Buttons from '../../common/buttons';
import Modal from '../Modal';
import StaffModalStyles from './styles';
import {
  addStaff, editStaff, IStaffInformation, selectStaff, Avatars,
} from '../../../features/staffSlice';
import Input from '../../common/Input/styles';
import AvatarSelect from '../../avatarSelect/AvatarSelect';

interface IStaffFormProps {
  staffDetails: IStaffInformation;
  setStaffDetails : React.Dispatch<React.SetStateAction<IStaffInformation>>;
}

enum ITab {
  Form,
  Avatar,
}

function StaffForm({ staffDetails, setStaffDetails }:IStaffFormProps) {
  const dispatch = useAppDispatch();
  const { displayedModal } = useAppSelector(selectSettings);
  const isAddMode = displayedModal?.type === ModalTypeOptions.ADD;
  const firstAvatarName = Object.entries(Avatars)[0][0];
  const [selectedAvatar, setSelectedAvatar] = useState<string>(isAddMode ? firstAvatarName : (staffDetails?.avatar || ''));
  const Tabs : ITab[] = [ITab.Form, ITab.Avatar];
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  const [currentTab, setCurrentTab] = useState<ITab>(Tabs[0]);
  const [displayNextActionButton, setDisplayNextActionButton] = useState<boolean>(false);

  useEffect(() => {
    if (staffDetails) {
      setDisplayNextActionButton([staffDetails?.firstName || '', staffDetails?.lastName || ''].every((x) => x.length > 0));
    }
  }, [staffDetails]);

  useEffect(() => {
    setStaffDetails((currentValue) => ({ ...currentValue, avatar: selectedAvatar }));
  }, [selectedAvatar]);

  useEffect(() => {
    setCurrentTab(Tabs[currentTabIndex]);
  }, [currentTabIndex]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    const { name } = e.target;

    switch (name) {
      case 'firstName':
      case 'lastName':
        // Capitalize 1st letter and allow letters only
        value = ((value?.charAt(0) || '').toLocaleUpperCase() + value.slice(1))?.replace(/[^A-Za-z]/g, '');
        break;
      default:

        break;
    }
    setStaffDetails({ ...staffDetails, [name]: value });
  };

  const handleNextClick = () => {
    if (currentTabIndex < Tabs.length - 1) {
      setCurrentTabIndex((currentValue) => currentValue + 1);
    }
  };
  const handlePreviousClick = () => {
    if (currentTabIndex > 0) {
      setCurrentTabIndex((currentValue) => currentValue - 1);
    }
  };
  const handleCloseModal = () => {
    dispatch(setDisplayedModal({ option: DisplayedModalOptions.none }));
  };

  const handleAddStaffClick = () => {
    const newStaffId = uuidv4();
    const newStaff = {
      ...staffDetails,
      id: newStaffId,
    };
    dispatch(addStaff(newStaff));
    dispatch(addStaffToOffice({ staffId: newStaffId, officeId: displayedModal.payload?.officeId }));
    dispatch(setDisplayedModal({ option: DisplayedModalOptions.none, payload: null }));
  };

  const handleEditStaffClick = () => {
    dispatch(editStaff({ staffId: displayedModal.payload?.staffId, staffItem: staffDetails }));
    dispatch(setDisplayedModal({ option: DisplayedModalOptions.none, payload: null }));
  };

  return (
    <>
      <StaffModalStyles.HeadingContainer>
        { (Tabs.length > 1 && currentTab !== Tabs[0]) && (
        <Buttons.TextButton onClick={handlePreviousClick}>
          <HeaderStyles.BackButtonIcon src={Images.ArrowLeft} />
        </Buttons.TextButton>
        )}
        <StaffModalStyles.DeleteConfirmationTitle>
          {isAddMode ? 'Add' : 'Edit'}
          {' '}
          Staff Member
        </StaffModalStyles.DeleteConfirmationTitle>
        <Buttons.TextButton onClick={handleCloseModal}>
          <HeaderStyles.BackButtonIcon src={Images.CloseCircle} />
        </Buttons.TextButton>
      </StaffModalStyles.HeadingContainer>
      { (currentTab === ITab.Form) && (
      <StaffModalStyles.StaffForm>
        <Input
          name="firstName"
          type="text"
          value={staffDetails?.firstName}
          placeholder="Enter FirstName"
          onChange={(e) => handleInputChange(e)}
        />
        <Input
          name="lastName"
          type="text"
          value={staffDetails?.lastName}
          placeholder="Enter LastName"
          onChange={(e) => handleInputChange(e)}
        />
      </StaffModalStyles.StaffForm>
      )}

      { (currentTab === ITab.Avatar) && (
      <StaffModalStyles.AvatarsParentContainer>
        <StaffModalStyles.AvatarsTitle>Avatars</StaffModalStyles.AvatarsTitle>
        <StaffModalStyles.AvatarsContainer>
          <AvatarSelect selectedParentAvatar={selectedAvatar} setSelectedParentAvatar={setSelectedAvatar} />
        </StaffModalStyles.AvatarsContainer>
      </StaffModalStyles.AvatarsParentContainer>
      )}

      <StaffModalStyles.ProgressIndicatorContainer>
        {
        Tabs.map((tab) => (
          <StaffModalStyles.ProgressIndicator key={tab} filled={tab === currentTab} />
        ))
        }
      </StaffModalStyles.ProgressIndicatorContainer>
      { (currentTab === ITab.Form && displayNextActionButton) && (
        <Buttons.PrimaryButton onClick={handleNextClick}>
          Next
        </Buttons.PrimaryButton>
      )}
      { (currentTab === ITab.Avatar) && (
        <Buttons.PrimaryButton onClick={() => (isAddMode ? handleAddStaffClick() : handleEditStaffClick())}>
          {isAddMode ? 'Add' : 'Edit'}
          {' '}
          Staff Member
        </Buttons.PrimaryButton>
      )}
    </>
  );
}

function Staff() {
  const dispatch = useAppDispatch();
  const { displayedModal } = useAppSelector(selectSettings);
  const isAddMode = displayedModal?.type === ModalTypeOptions.ADD;
  const { staff } = useAppSelector(selectStaff);
  const selectedStaff = staff.find((x) => x.id === displayedModal.payload.staffId);
  const [showExitButton] = useState<boolean>(false);
  const [showDeleteStaffConfirmation, setShowDeleteStaffConfirmation] = useState<boolean>(false);
  const [showEditStaffForm, setShowEditStaffForm] = useState<boolean>(isAddMode || false);
  const [staffDetails, setStaffDetails] = useState<IStaffInformation>(selectedStaff ?? {} as IStaffInformation);

  const handleCloseModal = () => {
    dispatch(setDisplayedModal({ option: DisplayedModalOptions.none }));
  };

  const handleEditStaffConfirmationBox = () => {
    setShowEditStaffForm(true);
  };

  const handleShowDeleteConfirmationBox = () => {
    setShowDeleteStaffConfirmation(true);
  };

  const handleDeleteStaff = () => {
    dispatch(removeStaffFromOffice({ staffId: displayedModal.payload?.staffId, officeId: displayedModal.payload?.officeId }));
    handleCloseModal();
  };

  return (
    <Modal showExitButton={showExitButton}>
      <StaffModalStyles.Container>

        {showEditStaffForm && (
        <StaffForm
          setStaffDetails={setStaffDetails}
          staffDetails={staffDetails}
        />
        )}

        {(!showDeleteStaffConfirmation && !showEditStaffForm) && (
        <>
          <Buttons.PrimaryButton onClick={handleEditStaffConfirmationBox}>
            Edit Staff Member
          </Buttons.PrimaryButton>

          <Buttons.TextButton className="delete-stuff-button capitalize-text" color="#489DDA" onClick={handleShowDeleteConfirmationBox}>
            Delete Staff Member
          </Buttons.TextButton>
        </>
        )}

        {
          showDeleteStaffConfirmation && (
            <>
              <span className="d-flex">
                <Buttons.TextButton onClick={() => setShowDeleteStaffConfirmation(false)}>
                  <HeaderStyles.BackButtonIcon src={Images.ArrowLeft} />
                </Buttons.TextButton>
                <StaffModalStyles.DeleteConfirmationTitle>
                  Are you sure you want to Delete Staff Member?
                </StaffModalStyles.DeleteConfirmationTitle>
              </span>
              <Buttons.PrimaryButton background="#F44336" onClick={handleDeleteStaff}>
                Delete Staff
              </Buttons.PrimaryButton>
              <Buttons.TextButton onClick={handleCloseModal}>
                Keep Staff
              </Buttons.TextButton>
            </>
          )
        }
      </StaffModalStyles.Container>

    </Modal>
  );
}

export default Staff;
