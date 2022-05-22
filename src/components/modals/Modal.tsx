/* eslint-disable react/require-default-props */
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../constants/helpers/hooks';
import { setDisplayedModal, DisplayedModalOptions, selectSettings } from '../../features/settingsSlice';
import ModalStyles, { OverLay } from './styles';

interface IModalProps {
  title? : string;
  children : React.ReactElement;
  padding?: number | null;
}
interface IModalDisplayProps {
  modalName :string;
  Modal :any;
}

export function ModalDisplay({ modalName, Modal }:IModalDisplayProps) {
  const { displayedModal } = useAppSelector(selectSettings);

  return (displayedModal.option === modalName) ? (
    <>
      <OverLay />
      <Modal />
    </>
  ) : null;
}

function ModalPopUp({ title = '', padding = null, ...rest }: IModalProps) {
  const dispatch = useAppDispatch();
  return (
    <ModalStyles.Container padding={padding}>
      <div className="top">
        <h2 className="title">{title}</h2>
        <button
          className="exitButton"
          type="button"
          onClick={() => dispatch(setDisplayedModal({ option: DisplayedModalOptions.none, entityProfileId: null }))}
        >
          X
        </button>
      </div>
      {rest.children}
    </ModalStyles.Container>
  );
}

export default ModalPopUp;
