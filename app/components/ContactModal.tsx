import React, { useState, FormEvent } from "react";
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
} from "@coreui/react";
import logo from "../../img/code.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


interface ContactModalProps {
  visible: boolean;
  onClose: () => void;
  code: {};
}

const ContactModal: React.FC<ContactModalProps> = ({
  visible,
  onClose,
  code,
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/route", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }

    console.log("Form submitted", { name, email, message });
    onClose();
  };

  return (
    <CModal visible={visible} onClose={onClose}>
      <CModalHeader className="bg-blue-300">
        <Image className="mr-1" src={logo} alt="brand logo" />
        <CModalTitle className="bg-blue-300">Contact Me</CModalTitle>
      </CModalHeader>
      <CModalBody className="bg-dark text-light">
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
            <FontAwesomeIcon className="mr-1" icon={faPaperPlane} />
            Submit
          </CButton>
        </CForm>
      </CModalBody>
      <CModalFooter style={{ height: "90px", backgroundColor: "#93c5fd" }} />
    </CModal>
  );
};

export default ContactModal;
