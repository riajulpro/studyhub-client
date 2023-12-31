import { motion } from "framer-motion";

const Faq = () => {
  const faqData = [
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking on the 'Register' link in the navbar.",
    },
    {
      question: "How can I submit assignments?",
      answer:
        "You can submit assignments in the 'My Assignments' section after logging in.",
    },
    {
      question: "Can I join multiple study groups?",
      answer:
        "Yes, you can join multiple study groups and collaborate with different sets of peers.",
    },
    {
      question: "What if I miss a study session?",
      answer:
        "You can catch up by accessing the study materials shared by your peers in the group.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, we have a mobile app available for both Android and iOS platforms.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach out to our support team through the 'Contact Us' page in the footer.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-footer">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 gap-1">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={index % 2 === 0 ? { scale: 0 } : { scale: -1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-white dark:bg-darkBlue shadow-md rounded border-b-2 border-darkBlue dark:border-lightBlue"
            >
              <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
