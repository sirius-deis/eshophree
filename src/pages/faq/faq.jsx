import Accordion from "../../components/accordion/accordion";

const faqEntries = [
    {
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase for a full refund."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to most countries worldwide. Shipping fees may apply."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order is shipped, you will receive an email with a tracking number."
    }
];

const FAQ = () => {
    return <div >
        <h1>Frequently Asked Questions</h1>
        {faqEntries.map((entry, index) => (
            <Accordion key={index} title={entry.question} content={<p>{entry.answer}</p>} />
        ))}
    </div>;
};

export default FAQ;
