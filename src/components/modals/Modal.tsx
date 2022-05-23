/* eslint-disable react/require-default-props */
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../constants/helpers/hooks';
import { setDisplayedModal, DisplayedModalOptions, selectSettings } from '../../features/settingsSlice';
import ModalStyles, { OverLay } from './styles';

interface IModalProps {
  title? : string;
  showExitButton? : boolean
  children : React.ReactElement;
  padding?: number | null;
}
interface IModalDisplayProps {
  modalName :string;
  Modal :any;
}

export function ModalDisplay({ modalName, Modal }:IModalDisplayProps) {
  const dispatch = useAppDispatch();
  const { displayedModal } = useAppSelector(selectSettings);

  return (displayedModal.option === modalName) ? (
    <>
      <OverLay onClick={() => dispatch(setDisplayedModal({ option: DisplayedModalOptions.none, payload: null }))} />
      <Modal />
    </>
  ) : null;
}

function ModalPopUp({
  title = '', showExitButton = true, padding = null, ...rest
}: IModalProps) {
  const dispatch = useAppDispatch();
  return (
    <ModalStyles.Container padding={padding}>
      <div className="top">
        <h2 className="title">{title}</h2>
        {showExitButton && (
        <button
          className="exitButton"
          type="button"
          onClick={() => dispatch(setDisplayedModal({ option: DisplayedModalOptions.none, payload: null }))}
        >
          X
        </button>
        )}
      </div>
      {rest.children}
    </ModalStyles.Container>
  );
}

export default ModalPopUp;
