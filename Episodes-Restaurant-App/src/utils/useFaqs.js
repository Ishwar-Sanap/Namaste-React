import { useEffect, useState } from "react";
import { FAQs_API_URL } from "./constants";
export const useFaqs = () => {
  const [faqsList, setFaqsList] = useState([]);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    const proxyURL = "https://proxy.corsfix.com/?";
    const resp = await fetch(proxyURL + FAQs_API_URL);
    const resJson = await resp.json();

    setFaqsList(resJson?.data?.issues?.data);
  };
  return faqsList;
};
