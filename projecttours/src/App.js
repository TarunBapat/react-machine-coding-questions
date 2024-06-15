import React from "react";
import { driver } from "driver.js";

const App = () => {
  const driverObj = driver({
    animate: false,
    showProgress: false,
    showButtons: ["next", "previous", "close"],
    onCloseClick: expect.any(Function),
    steps: [
      {
        element: "#element1",
        popover: {
          title: "Title 1",
          description: "Description 1",
        },
      },
      {
        element: "#element2",
        popover: {
          title: "Title 2",
          description: "Description 2",
        },
      },
    ],
  });
  // function startTour() {

  // }

  return (
    <div>
      <button
        onClick={() => {
          driverObj.drive();
        }}
        data-testid="start-tour"
      >
        Start Tour
      </button>
      <div id="element1">Element 1</div>
      <div id="element2">Element 2</div>
    </div>
  );
};

export default App;
