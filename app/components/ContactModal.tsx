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
import "dotenv/config";
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
  const AccessKey = process.env.MAIL_API;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "c264e363-41fa-400e-988b-5a66003f1e2e",
        name: target.name.value,
        email: target.email.value,
        message: target.message.value,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
      alert("Message successfully sent");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.error("Error:", result);
      alert("Error, please try resubmitting the form");
    }
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
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="email">Email</CFormLabel>
            <CFormInput
              type="email"
              name="email"
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
