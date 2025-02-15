import PropTypes from "prop-types";
import { useState } from "react";
import LabelWithInput from "../label-with-input/labelWithInput";
import Spinner from "../spinner/spinner";
import InfoBox from "../infoBox/infoBox";
import Button from "../../components/button/button";
import LabelWithTextarea from "../label-with-textarea/labelWithTextarea";
import { StyledText, StyledTitle } from './contactForm.styles';

const ContactForm = ({ title, text, clickHandler, isLoading, error, isSubmitted }) => {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isErrorClosed, setIsErrorClosed] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { email, subject, message } = e.target.elements
    setIsErrorClosed(false)
    clickHandler(email.value, subject.value, message.value);
  }
  return <form onSubmit={onSubmitHandler} aria-label='form'>
    <StyledTitle>{title}</StyledTitle>
    <StyledText>{text}</StyledText>
    <LabelWithInput type="email" placeholder="Enter your email" label="Email" name="email" value={email} setValue={setEmail} />
    <LabelWithInput type="text" placeholder="Enter your subject" label="Subject" name="subject" value={subject} setValue={setSubject} />
    <LabelWithTextarea placeholder="Enter your message" label="Your message" name="message" value={message} setValue={setMessage} />
    <Button type="submit">Send message</Button>
    {isLoading && <Spinner />}
    {error && !isErrorClosed && <InfoBox message={error} clickHandler={() => setIsErrorClosed(true)} />}
    {isSubmitted && !isLoading && !error && <InfoBox message="Thank you for your submitting!" />}
  </form>
}

ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  isSubmitted: PropTypes.bool.isRequired,
}

export default ContactForm;