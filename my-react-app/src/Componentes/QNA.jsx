import React, { useState } from 'react';

const FAQ = () => {
  const topics = [
    {
      questions: [
        {
          question: "What is the cPanel?",
          answer: "Using Unlimited cPanel Hosting, you can effortlessly manage emails, FTP accounts, databases, and multiple domains. cPanel is utilized for shared hosting, dedicated cPanel hosting servers, and reseller hosting. At SpidyHost, we provide exclusively Unlimited cPanel shared hosting plans."
        },
        {
          question: "Why should I choose Unlimited cPanel Hosting?",
          answer: "Unlimited cPanel Hosting is particularly beneficial for individuals with small or medium-sized websites. Its user-friendly interface simplifies website management, allowing users to easily handle their websites without requiring extensive technical knowledge."
        },
        {
          question: "How are cPanel and web hosting different?",
          answer: "Web hosting is an online service that enables you to publish your website files on the internet. Unlimited cPanel Hosting is a popular control panel that facilitates smoother operations and simplifies web hosting management. While it is possible to manage web hosting without cPanel, we do not recommend doing so, as it requires a considerable amount of technical knowledge."
        },
        {
          question: "Any alternatives for Unlimited cPanel hosting?",
          answer: "Most web hosting providers offer cPanel to manage websites, as it provides a reliable and intuitive platform for server and site management. Our Unlimited cPanel Hosting plans come with the cPanel control panel. While there are various web hosting control panels available in the market, we recommend trying our Enhance Control Panel. It shares similarities with cPanel but offers a more user-friendly experience, incorporating advanced technologies for an enhanced hosting management experience."
        },
        {
          question: "Can I get a free domain name with Unlimited cPanel hosting plan?",
          answer: "Absolutely! Our Unlimited cPanel Hosting triennially plans include a complimentary .com/.net/.org/.in/.info domain name. With Unlimited cPanel Hosting, you not only get free SSL certificates but also benefit from unlimited disk space, unlimited email accounts, unlimited bandwidth, and MySQL databases. All these features are bundled with our affordable and feature-rich unlimited cPanel web hosting service."
        },
        {
          question: "Will you help me move my existing website to SpidyHost?",
          answer: "Absolutely! Our Unlimited cPanel Hosting plans come with a free migration service. We are delighted to assist you in seamlessly migrating your website from your current hosting provider to SpidyHost."
        },
        {
          question: "Is customer support available with Unlimited cPanel Hosting?",
          answer: "Customer satisfaction is of utmost importance to us. We are dedicated to providing comprehensive support for cPanel web hosting. Our support is available through various channels, including Mobile call, Live Chat, WhatsApp, and Support tickets. Rest assured, we offer 24x7 support for all the best cPanel web hosting services."
        },
        {
          question: "Can I host multiple websites or domains with SpidyHost Unlimited cPanel Hosting Plans?",
          answer: "Absolutely! cPanel offers the best user-friendly GUI, allowing users to effortlessly add multiple domains without requiring any technical knowledge. However, please note that the Baby Plan includes only a single domain, whereas the Younger and Hero plans come with the option to host multiple domains."
        },
        {
          question: "Can I create more than one database on a single domain with Unlimited cPanel hosting?",
          answer: "Certainly! With cPanel, you have the flexibility to create multiple databases. However, please note that our Unlimited cPanel Baby Plan includes 5 databases, while the Younger and Hero Plans offer the advantage of Unlimited Databases."
        },
        {
          question: "How do the best cPanel hosting daily backups work? Can I download/restore my backups?",
          answer: "Indeed, all our cPanel shared web hosting servers come with the added benefit of free daily backups. These backups are powered by JetBackup and are fully off-site, being re-replicated to multiple points of presence in off-site disaster recovery datacenters. With JetBackup, you can effortlessly restore backups whenever needed."
        },
        {
          question: "Does Unlimited cPanel Hosting provide a one-click script installer?",
          answer: "Absolutely! We offer the Softaculous Script Installer to simplify the installation of your favorite scripts with just a click of a button! With access to over 300 hosting apps, your favorite applications are just one click away! Whether you want to install WordPress, Joomla, or any other scripts, it's all hassle-free with our one-click installation feature."
        },
        {
          question: "Can I upgrade my hosting plan later?",
          answer: "Certainly! Upgrading to the Best cPanel Hosting Younger or Hero plan is a breeze. If you encounter any issues during the upgrade process, please don't hesitate to contact us. We're here to assist you every step of the way."
        },
      ]
    }
  ];

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestionIndex(index === selectedQuestionIndex ? null : index);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-10">
      <div className="faq-container bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full mx-auto">
        <h2 className="text-4xl  text-start mb-6">FAQs about Unlimited cPanel Cloud Hosting</h2>
        <h3 className='text-xl text-gray-600'>Please check out the frequently asked questions about our Unlimited cPanel Cloud hosting along with their respective answers.</h3>
        <div className="faq-questions mt-4 text-2xl">
          {topics[0].questions.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={selectedQuestionIndex === index}
              onClick={() => handleQuestionClick(index)}
            
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item mb-4  ">
      <div
        className="faq-question flex  text-2xl justify-between sm:text-md cursor-pointer"
        onClick={onClick}
      >
        <div className="max-w-xs sm:max-w-md">{question}</div>
        
      </div>
      {isOpen && (
        <div className="faq-answer text-xl text-gray-500  sm:text-md  mt-2">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQ;
