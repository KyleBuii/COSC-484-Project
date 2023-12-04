import React, { useState, useEffect } from 'react';
import './stopwatch.scss';

const StopwatchTimer = () => {
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [timerTime, setTimerTime] = useState(60);
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let stopwatchInterval, timerInterval;

    if (isStopwatchRunning) {
      stopwatchInterval = setInterval(() => {
        setStopwatchTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(stopwatchInterval);
    };
  }, [isStopwatchRunning]);

  useEffect(() => {
    let timerInterval;

    if (isTimerRunning && timerTime > 0) {
      timerInterval = setInterval(() => {
        setTimerTime(prevTime => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            setIsTimerRunning(false);
            clearInterval(timerInterval);
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isTimerRunning, timerTime]);

  useEffect(() => {
    if (timerTime <= 10 && timerTime > 0) {
      
      document.getElementById('timer-text').style.color = '#e74c3c';
    } else if(timerTime <= 20 && timerTime >= 11){
      document.getElementById('timer-text').style.color = '#FFAE42';
    }else {
  
      document.getElementById('timer-text').style.color = '#000000';
    }

    if (timerTime === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      alert('Timer has finished!');
    }
  }, [timerTime, isTimerRunning]);

  const startStopwatch = () => {
    setIsStopwatchRunning(true);
  };

  const stopStopwatch = () => {
    setIsStopwatchRunning(false);
  };

  const resetStopwatch = () => {
    setStopwatchTime(0);
    setIsStopwatchRunning(false);
  };

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    setTimerTime(0);
    setIsTimerRunning(false);
  };

  const handleMinutesChange = event => {
    setInputMinutes(event.target.value);
  };

  const handleSecondsChange = event => {
    setInputSeconds(event.target.value);
  };

  const setCustomTimer = () => {
    const minutes = parseInt(inputMinutes, 10) || 0;
    const seconds = parseInt(inputSeconds, 10) || 0;

    if (minutes >= 0 && seconds >= 0) {
      setTimerTime(minutes * 60 + seconds);
      setInputMinutes('');
      setInputSeconds('');
    } else {
      alert('Please enter valid positive numbers for minutes and seconds.');
    }
  };

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <div className="stopwatch-timer">
        <h2>Stopwatch</h2>
        <p id="stopwatch-text">{formatTime(stopwatchTime)}</p>
        <button onClick={startStopwatch}>Start</button>
        <button onClick={stopStopwatch}>Stop</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>

      <div className="stopwatch-timer">
        <h2>Timer</h2>
        <p id="timer-text">{formatTime(timerTime)}</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
        <div>
          <input
            type="number"
            placeholder="Minutes"
            value={inputMinutes}
            onChange={handleMinutesChange}
          />
          <input
            type="number"
            placeholder="Seconds"
            value={inputSeconds}
            onChange={handleSecondsChange}
          />
          <button onClick={setCustomTimer}>Set Timer</button>
        </div>
      </div>
    </div>
  );
};

export default StopwatchTimer;
