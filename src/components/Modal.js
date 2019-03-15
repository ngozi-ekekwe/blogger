import React from 'react';
import Button from './Button';
import {
  Modal, ModalBody,
} from 'react-bootstrap';


const AuthModal = ({
  openModal, title, content, closeModal,
}) => (
    <Modal show={openModal} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={closeModal}>
          Save Changes
    </Button>
      </Modal.Footer>
    </Modal>
  );

export default AuthModal;
