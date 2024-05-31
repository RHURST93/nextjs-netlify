import React, { useState, FormEvent } from 'react';
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
} from '@coreui/react';
import logo from '../../img/code.png'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


interface ContactModalProps {
  visible: boolean;
  onClose: () => void;
  code: {}
}

const ContactModal: React.FC<ContactModalProps> = ({ visible, onClose, code }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted', { name, email, message });
    onClose();
  };

  return (
    <CModal visible={visible} onClose={onClose}>
      <CModalHeader className='bg-blue-300 '>
        <Image className='mr-1' src={logo} alt= 'brand logo'/>
        <CModalTitle className=' bg-blue-300'>Contact Me</CModalTitle>
        
      </CModalHeader>
      <CModalBody className='bg-dark text-light'>
        <CForm onSubmit={handleSubmit}>
          <div className="mb-3">
            <CFormLabel htmlFor="name">Name</CFormLabel>
            <CFormInput
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="email">Email</CFormLabel>
            <CFormInput
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="message">Message</CFormLabel>
            <CFormTextarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <CButton type="submit" color="primary">
          <FontAwesomeIcon className='mr-1' icon={faPaperPlane} />

            Submit
          </CButton>
        </CForm>
      </CModalBody>
      <CModalFooter  style={{height: '90px',backgroundColor: '#93c5fd'}}>
        
      </CModalFooter>
    </CModal>
  );
};

export default ContactModal;
