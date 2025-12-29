import React, { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import FAQList from "./FAQList";
import { useFaqs } from "../utils/useFaqs";

const Contact = () => {
  const { loggedInUserName, setUserName } = useContext(UserContext);
  const [userInput, setUserInput] = useState(loggedInUserName);
  const [showIndex, setShowIndex] = useState(null);
  const faqsList = useFaqs();

  return (
    <div>
      <div className="my-5 w-1/2 mx-auto  ">
        <input
          type="text"
          placeholder="Enter name"
          className="px-2 py-1 m-2 border rounded-xl"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          className="bg-gray-600 px-2 py-1 rounded-xl text-white hover:cursor-pointer hover:bg-gray-800"
          onClick={() => {
            setUserName(userInput);
          }}
        >
          Change userName
        </button>
      </div>

         {/* Accordion effect there always only one FAQ will be opened.. */  }
      <div>
        <h1 className="w-1/2 mx-auto text-2xl font-semibold mb-2">FAQs</h1>
        {faqsList.map((faq, indx) => {
          return (
            faq.description && (
              <FAQList
                key={faq.id}
                faq={faq}
                showDescription={indx === showIndex}
                showIndex={() => setShowIndex( showIndex === indx ? null : indx)}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
