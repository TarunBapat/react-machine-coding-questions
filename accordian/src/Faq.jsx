import { useState } from "react";

const Faq = (props) => {
  const [isShown, setIsShown] = useState(true);
  // eslint-disable-next-line react/prop-types
  const { question, answer } = props.items;
  // eslint-disable-next-line react/prop-types
  return (
    <div>
      <h2 onClick={() => setIsShown(!isShown)}>{question}</h2>
      {isShown && <p>{answer}</p>}
    </div>
  );
};

export default Faq;
