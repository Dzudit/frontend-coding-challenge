import React from 'react';
import './styles/modal.sass';
import Button from './Button';
import H6 from './H6';

interface IModalProps {
  open: boolean;
  title: string;
}

const Modal = ({ open, title }: IModalProps) => {
  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: open ? 'block' : 'none' }}
    >
      <div className="modal-content">
        <H6>{title}</H6>
        <div>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
