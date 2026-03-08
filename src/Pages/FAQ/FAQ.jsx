import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What products does your company offer?",
    answer:
      "We provide a range of high-performance electronics including gaming keyboards, mice, cooling fans, monitors, monitor arms, custom liquid cooling systems, gaming chairs, and workstation desks."
  },
  {
    question: "Can I purchase products directly from this website?",
    answer:
      "No. This website is a product showcase designed to display our technology and solutions. For purchasing or distribution inquiries, please contact our sales team."
  },
  {
    question: "Do you provide custom cooling solutions?",
    answer:
      "Yes. We design and build custom liquid cooling solutions tailored for gaming PCs, workstations, and high-performance computing setups."
  },
  {
    question: "Are your keyboards and mice suitable for gaming?",
    answer:
      "Yes. Our keyboards and mice are designed for both professional and gaming environments with precision sensors, mechanical switches, and durable construction."
  },
  {
    question: "Do your monitor arms support multiple screens?",
    answer:
      "Many of our monitor arm solutions support dual and triple monitor setups and are compatible with standard VESA mounting systems."
  },
  {
    question: "Do you offer ergonomic gaming chairs and desks?",
    answer:
      "Yes. Our gaming chairs and desks are designed for comfort, posture support, and long gaming or work sessions."
  },
  {
    question: "Do you work with businesses or system builders?",
    answer:
      "Yes. We collaborate with system builders, PC integrators, gaming cafes, and businesses to provide custom setups and bulk solutions."
  },
  {
    question: "Where can I get technical support?",
    answer:
      "You can contact our technical support team through our contact page for setup guidance, compatibility questions, or product details."
  }
];

const FAQ=()=> {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          Learn more about our products, technologies, and solutions.
        </p>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default FAQ;