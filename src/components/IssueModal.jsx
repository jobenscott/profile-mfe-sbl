// components/IssueModal.js
import React, { useState } from 'react';
import { Button, Form } from '@edx/paragon';
import CustomModal from './Modal';
import './styles/Modal.css';

const IssueModal = ({user}) => {
  const [open, setOpen] = useState(false);
  const [issue, setIssue] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    console.log('put email/persistence logic here for ', user);
    setOpen(false);
  };

  return (
    <div>
      <Button className="pgn__issue-button" onClick={handleClickOpen}>
        Report an issue
      </Button>
      <CustomModal
        className="pgn__issue-modal"
        open={open}
        onClose={handleClose}
        title="Please give us details about your issue:"
        buttons={[
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>,
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>,
        ]}
      >
        <Form.Control
          as="textarea"
          rows={3}
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          className="pgn__my-custom-textarea"
        />
      </CustomModal>
    </div>
  );
};

export default IssueModal;
