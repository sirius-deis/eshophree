import PropTypes from "prop-types";
import { useState } from "react";
import LabelWithInput from "../label-with-input/labelWithInput";
import Spinner from "../spinner/spinner";
import InfoBox from "../infoBox/infoBox";
import LabelWithTextarea from "../label-with-textarea/labelWithTextarea";
import fetchData from "../../utils/fetchData";

const ContactForm = ({ title, text, clickHandler, isLoading, error, isSubmitted }) => {
  const [isErrorClosed, setIsErrorClosed] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { email, subject, message } = e.target.elements
    setIsErrorClosed(false)
    clickHandler(email.value, subject.value, message.value);
  }
  return <form onSubmit={onSubmitHandler}>
    <h2>{title}</h2>
    <p>{text}</p>
    <LabelWithInput type="email" label="Email" name="email" />
    <LabelWithInput type="text" label="Subject" name="subject" />
    <LabelWithTextarea label="Your message" name="message" />
    <Button >Send message</Button>
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