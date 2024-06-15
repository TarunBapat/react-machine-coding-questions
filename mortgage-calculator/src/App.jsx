import { useState } from "react";
import "./App.css";

// eslint-disable-next-line react/prop-types
const Modal = ({ setShowModal, termsHandler }) => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        color: "white",
        padding: "10px 10px",
        width: "600px",
      }}
    >
      <h1>Show modal</h1>
      <p>
        This is a modal lorem ipsum text This is a modal lorem ipsum textThis is
        a modal lorem ipsum textThis is a modal lorem ipsum text
      </p>
      <button onClick={() => setShowModal(false)}>Cancel</button>
      <button
        onClick={() => {
          setShowModal(false);
          termsHandler();
        }}
      >
        Accept
      </button>
    </div>
  );
};
function App() {
  const [showModal, setShowModal] = useState(false);
  const [termsAccept, setTermsAccept] = useState(false);

  const termsHandler = () => {
    setTermsAccept(true);
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: `${showModal ? "black" : ""}`,
        opacity: `${showModal ? "0.4" : ""}`,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        <div>
          {showModal && (
            <Modal setShowModal={setShowModal} termsHandler={termsHandler} />
          )}
        </div>
        {!showModal && !termsAccept && (
          <button onClick={() => setShowModal(true)}>Show Modal</button>
        )}
      </div>
      <div>{termsAccept && <p>Accepted terms</p>}</div>
    </div>
  );
}

export default App;
