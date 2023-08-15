// components/Modal.js
import React from 'react';
import { Button, Modal } from '@edx/paragon';
import './styles/Modal.css';

const CustomModal = ({ open, onClose, title, children, buttons, className }) => (
  <Modal
    open={open}
    title={title}
    onClose={onClose}
    body={children}
    buttons={buttons}
    dialogClassName={className}
  />
);

export default CustomModal;
