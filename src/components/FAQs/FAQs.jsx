import { Helmet } from 'react-helmet-async';
const FAQs = () => {
    const faqs = [
        {
            question: "What is GadgetHaven?",
            answer: "GadgetHaven is an online platform for finding and purchasing the latest gadgets."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is placed, you will receive a tracking number via email, which you can use to track your order."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept credit cards, debit cards, and PayPal as payment methods."
        },
        {
            question: "Can I return an item?",
            answer: "Yes, items can be returned within 30 days of purchase if they meet our return policy requirements."
        }
    ];
    return (
        <div className="text-center">
            <Helmet>
                <title>GadgetHaven | FAQs</title>
            </Helmet>
            <div className='bg-purple-700 py-10'>
                <h2 className="text-3xl font-bold text-center mb-4 text-purple-200 w-11/12 mx-auto">Frequently Asked Questions</h2>
                <p className='text-purple-300 mx-auto w-10/12'>
                    Have questions? Our FAQ page is here to help! Whether you're looking for information about orders, shipping, or returns, you'll find clear and helpful answers to all your queries. Explore easy-to-navigate sections that guide you through everything, and if you need further assistance, our customer support is just a click away!</p>
            </div>

            <div className="max-w-2xl mx-auto my-8 p-4">

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                {faq.question}
                            </div>
                            <div className="collapse-content">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;