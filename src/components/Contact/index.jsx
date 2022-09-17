import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import ContentBase from "../../styled-components/ContentBase";
import HeaderBase from "../../styled-components/HeaderBase";
import UnderlineBase from "../../styled-components/UnderlineBase";
import emailjs from "@emailjs/browser";
import ButtonBase from "../../styled-components/ButtonBase";

const ContactWrapper = styled.div`
  padding: 80px 20px;
  background-color: var(--color-bg-1);
`;

const ContactHeader = styled(HeaderBase)``;

const ContactHeaderLine = styled(UnderlineBase)``;

const ContactContent = styled(ContentBase)`
  gap: 270px;
  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 30px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    gap: 50px;
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h3 {
    font-size: 27px;
    letter-spacing: 1px;
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 25px;
    }
    @media (min-width: 480px) and (max-width: 767px) {
      font-size: 22px;
    }
    @media (max-width: 479px) {
      font-size: 20px;
    }
  }
`;

const ContactInfoItem = styled.div`
  display: flex;
  gap: 15px;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 13px;
  }

  span {
    letter-spacing: 1.5px;
    a {
      color: white;
      text-decoration: none;
      strong {
        margin-left: 5px;
        &:hover {
          color: wheat;
        }
      }
    }
  }
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 500px;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-basis: 400px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    flex-basis: 300px;
  }
  h3 {
    margin-bottom: 30px;
    font-size: 27px;
    letter-spacing: 1px;
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 25px;
    }
    @media (min-width: 480px) and (max-width: 767px) {
      font-size: 22px;
    }
    @media (max-width: 479px) {
      font-size: 20px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 0px) and (max-width: 767px) {
      width: 95%;
    }
    input,
    textarea {
      background-color: transparent;
      outline: none;
      border: 1px solid wheat;
      padding: 10px;
      color: white;
      line-height: 1.5;
      font-size: 16px;
      border-radius: 7px;
      transition: all 0.2s;
      &::placeholder {
        font-size: 16px;
        color: white;
        @media (min-width: 768px) and (max-width: 1024px) {
          font-size: 14px;
        }
        @media (min-width: 0px) and (max-width: 767px) {
          font-size: 13px;
        }
      }
      &:focus {
        border-bottom: none;
        box-shadow: 1px 3px 3px rgba(245, 222, 179, 0.7);
      }
      &:focus::placeholder {
        color: transparent;
      }
      @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 14px;
      }
      @media (min-width: 0px) and (max-width: 767px) {
        font-size: 13px;
      }
    }

    textarea {
      resize: none;
    }
  }
`;

const ContactBtn = styled(ButtonBase)`
  margin-top: 30px;
  @media (min-width: 0px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;

const Contact = () => {
  const formRef = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      formRef.current.name.value === "" ||
      formRef.current.email.value === "" ||
      formRef.current.subject.value === "" ||
      formRef.current.message.value === ""
    ) {
      window.alert("Warning !! You must enter all field !!");
    } else {
      emailjs
        .sendForm(
          "service_h8b9i1j",
          "template_q3z2q49",
          formRef.current,
          "zL2phvZKAg8UoEyfU"
        )
        .then(
          (result) => {
            window.alert("Success !! You sent a message to Hop Ngo.");
            e.target.reset();
          },
          (error) => {
            window.alert("Failed !! Error Server. Please try again");
          }
        );
    }
  };
  return (
    <ContactWrapper id="contact">
      <ContactHeader>
        <h1 className="animate" data-animate="tracking-in-expand 1s">
          Contact
        </h1>
        <ContactHeaderLine
          className="animate"
          data-animate="slideInTop 1.5s"
        ></ContactHeaderLine>
      </ContactHeader>
      <ContactContent>
        <ContactInfo className="animate" data-animate="slideInLeft 1.5s">
          <h3>Contact Info</h3>
          <ContactInfoItem>
            <FontAwesomeIcon icon={solid("location-dot")} fontSize="25px" />
            <span>
              Address: <strong>Thu Duc City, Vietnam</strong>{" "}
            </span>
          </ContactInfoItem>
          <ContactInfoItem>
            <FontAwesomeIcon icon={solid("phone")} fontSize="25px" />
            <span>
              Phone: <strong>+84 357903961</strong>
            </span>
          </ContactInfoItem>
          <ContactInfoItem>
            <FontAwesomeIcon icon={solid("envelope")} fontSize="25px" />
            <span>
              Email: <strong> ngoxuanhop254@gmail.com</strong>
            </span>
          </ContactInfoItem>
          <ContactInfoItem>
            <FontAwesomeIcon icon={solid("home")} fontSize="25px" />
            <span>
              Website:
              <a
                href="https://portfolio-ngo-hop.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>https://portfolio-ngo-hop.netlify.app/</strong>
              </a>
            </span>
          </ContactInfoItem>
        </ContactInfo>
        <ContactForm className="animate" data-animate="slideInRight 1.5s">
          <h3>Contact Form</h3>
          <form ref={formRef} onSubmit={handleSubmitForm}>
            <input type="text" placeholder="Name: " name="name" />
            <input type="email" placeholder="Email: " name="email" />
            <input
              type="text"
              placeholder="Subject (Optional): "
              name="subject"
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message: "
            ></textarea>
            <ContactBtn>Submit</ContactBtn>
          </form>
        </ContactForm>
      </ContactContent>
    </ContactWrapper>
  );
};

export default Contact;
