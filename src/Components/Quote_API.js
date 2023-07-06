import { useEffect, useState } from 'react';
import './quote.css';

const QuoteApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      setLoader(true);
      const category = 'success';
      try {
        const getData = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          method: 'GET',
          headers: { 'X-Api-Key': process.env.REACT_APP_QUOTE_API_KEY },
        });
        const response = await getData.json();
        setData(response[0]);
        setLoader(false);
      } catch (error) {
        setError(true);
      }
    };
    getQuote();
  }, [setData, setLoader]);

  if (error) return <p>Someting failed</p>;

  if (loader) return <p>Loading...</p>;

  return (
    <section className="quotes">
      <p>{data.quote}</p>
      <p className="author">{data.author}</p>
    </section>
  );
};

export default QuoteApi;
