import React, { useState, useEffect } from "react";

import { Container, Action } from "./styles";

interface TimerProps {
  isTimming: boolean;
}

const Timer: React.FC<TimerProps> = ({ isTimming }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(1);

  const [intervalId, setIntervalId] = useState(null);

  const [action, setAction] = useState("Work Time !!!");

  useEffect(() => {
    if (isTimming) {
      // Here we start the function handleStartTimer every time when isTimming was true
      handleStartTimer();
    }

    // When isTimming was false, clear the interval method.
    clearInterval(intervalId);
  }, [isTimming]);

  useEffect(() => {
    if (isTimming && seconds < 59) {
      if (seconds < 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }

      if (minutes === 0 && seconds < 0) {
        action === "Work Time !!!"
          ? setAction("Take some rest !!!")
          : setAction("Work Time !!!");
        action === "Work Time !!!" ? setMinutes(4) : setMinutes(24);
      }
    }

    return;
  }, [seconds]);

  // Here is the function to Start the Timer
  const handleStartTimer = () => {
    if (minutes === 25 || (action === "Take some rest !!!" && minutes === 5)) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }

    const id = window.setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    setIntervalId(id);
  };

  return (
    <Container>
      <h1>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </h1>
      <Action action={action}>{action}</Action>
    </Container>
  );
};

export default Timer;
