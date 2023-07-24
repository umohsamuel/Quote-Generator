import axios from "axios";
import { useState } from "react";

const getQuote = () => {
  const [quote, setQuote] = useState("");
  const getQuotes = async () => {
    await axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res.data.content);
        setQuote(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={getQuotes}>Quote of the Day</button>
      {quote && <p>{quote}</p>}
    </>
  );
};

export default getQuote;
