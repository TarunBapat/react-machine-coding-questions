import React, { useState, useEffect } from "react";

const App = () => {
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [tid, setTid] = useState(0);
  console.log("isStart", isStart);
  function executeTimer(hours, min, sec) {
    setSec((prevSec) => {
      if (prevSec > 0) {
        return prevSec - 1;
      } else {
        setMin((prevMin) => {
          if (prevMin > 0) {
            return prevMin - 1;
          } else {
            setHours((prevHours) => {
              if (prevHours > 0) {
                setMin(59);
                return prevHours - 1;
              } else {
                setIsStart(false);
                return 0;
              }
            });
            return 59;
          }
        });
        return 59;
      }
    });
  }
  useEffect(() => {
    let timerId;
    if (isStart) {
      timerId = setInterval(() => {
        executeTimer();
      }, 1000);
      setTid(timerId);
      console.log("timerId", timerId);
    }
    return function cleanup() {
      console.log(`Clearing ${timerId}`);
      clearInterval(timerId);
    };
  }, [isStart, hours, min, sec]);

  const startTimerHandler = () => {
    setIsStart(true);
  };

  const handleHoursChange = (e) => {
    setHours(parseInt(e.target.value) || 0);
  };

  const handleMinChange = (e) => {
    setMin(parseInt(e.target.value) || 0);
  };

  const handleSecChange = (e) => {
    setSec(parseInt(e.target.value) || 0);
  };
  const resetHandler = () => {
    setHours(0);
    setMin(0);
    setSec(0);
  };

  const pauseHandler = () => {
    setPause(true);
    clearInterval(tid);
  };
  const resumeHandler = () => {
    setPause(false);
    executeTimer(hours, min, sec);
  };
  return (
    <>
      {!isStart && (
        <div>
          <div>
            <input type="text" placeholder="HH" onChange={handleHoursChange} />
            :
            <input type="text" placeholder="MM" onChange={handleMinChange} />
            :
            <input type="text" placeholder="SS" onChange={handleSecChange} />
          </div>
          <button onClick={startTimerHandler}>Start</button>
        </div>
      )}
      {isStart && (
        <div>
          <div>
            <span>{hours < 10 ? `0${hours}` : hours}</span>
            <span>:</span>
            <span>{min < 10 ? `0${min}` : min}</span>
            <span>:</span>
            <span>{sec < 10 ? `0${sec}` : sec}</span>
          </div>
          {!pause ? (
            <button onClick={pauseHandler}>Pause</button>
          ) : (
            <button onClick={resumeHandler}>Resume</button>
          )}
          <button onClick={resetHandler}>Reset</button>
        </div>
      )}
    </>
  );
};

export default App;
