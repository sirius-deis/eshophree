import LabelWithInput from "../label-with-input/labelWithInput";
import Spinner from "../spinner/spinner";
import InfoBox from "../infoBox/infoBox";
import LabelWithTextarea from "../label-with-textarea/labelWithTextarea";
import fetchData from "../../utils/fetchData";

const ContactForm = ({ title, text, clickHandler, isLoading, error, isSubmitted }) => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { email, subject, message } = e.target.elements
    fetchData('contact', { email: email.value, subject: subject.value, message: message.value });
  }
  return <form onSubmit={onSubmitHandler}>
    <h2>{title}</h2>
    <p>{text}</p>
    <LabelWithInput type="email" label="Email" name="email" />
    <LabelWithInput type="text" label="Subject" name="subject" />
    <LabelWithTextarea label="Your message" name="message" />
    <Button onClick={clickHandler}>Send message</Button>
    {isLoading && <Spinner />}
    {error && !isErrorClosed && <InfoBox message={error} />}
    {isSubmitted && <InfoBox message="Thank you for your submission!" />}
  </form>
}

export default ContactForm;