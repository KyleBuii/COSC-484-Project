import React, { useState, useEffect } from 'react';
import './stopwatch.scss';

const StopwatchTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerDuration, setTimerDuration] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <div>
        <h2>Stopwatch</h2>
        <p>{formatTime(elapsedTime)}</p>
        <button onClick={startStopwatch}>Start</button>
        <button onClick={stopStopwatch}>Stop</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>

      <div>
        <h2>Timer</h2>
        <p>{formatTime(timerDuration - elapsedTime)}</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default StopwatchTimer;