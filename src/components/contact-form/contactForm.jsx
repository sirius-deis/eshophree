import LabelWithInput from "../label-with-input/labelWithInput";
import Spinner from "../spinner/spinner";
import InfoBox from "../infoBox/infoBox";

const ContactForm = ({ title, text, clickHandler, isLoading, error, isSubmitted }) => {
  return <form action="">
    <h2>{title}</h2>
    <p>{text}</p>
    <LabelWithInput type="email" label="Email" name="email" />
    <LabelWithInput type="text" label="Subject" name="subject" />
    <Button onClick={clickHandler}>Send message</Button>
    {isLoading && <Spinner />}
    {error && !isErrorClosed && <InfoBox message={error} />}
    {isSubmitted && <InfoBox message="Thank you for your submission!" />}
  </form>
}

export default ContactForm;