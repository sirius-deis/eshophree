import Sidebar from "../../components/sidebar/sidebar";
import Accordion from "../../components/accordion/accordion";

const sidebarEntries = ["My account", "Ordering", "Shipping"];

const MyAccountEntries = [
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

const OrderingEntries = [
    {
        question: "How do I place an order?",
        answer: "To place an order, add items to your cart and proceed to checkout."
    },
    {
        question: "Can I cancel my order?",
        answer: "Yes, you can cancel your order within 24 hours of placing it."
    }
];

const ShippingEntries = [
    {
        question: "What are the shipping options?",
        answer: "We offer standard, express, and overnight shipping options."
    },
    {
        question: "How long does shipping take?",
        answer: "Shipping times vary based on the selected option and destination."
    }
];

const FAQ = () => {
    const [selectedTab, setSelectedTab] = useState("My account");

    const getEntries = () => {
        switch (selectedTab) {
            case "My account":
                return MyAccountEntries;
            case "Ordering":
                return OrderingEntries;
            case "Shipping":
                return ShippingEntries;
            default:
                return [];
        }
    };

    return <div >
        <Sidebar heading="Hot Topics" elements={sidebarEntries} />
        <div>
            <h1>Frequently Asked Questions</h1>
            {getEntries().map((entry, index) => (
                <Accordion key={index} title={entry.question} content={<p>{entry.answer}</p>} />
            ))}
        </div>
    </div>;
};

export default FAQ;
