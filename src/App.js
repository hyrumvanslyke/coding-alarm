import React, { useState } from 'react';
import './App.css';

import TimeDisplay from './components/timeDisplay';
import AlarmSetter from './components/alarmSetter';
import CodingQuestions from './components/codingQuestions';

function App() {
  // State to manage alarm time and questions
  const [alarmTime, setAlarmTime] = useState(null);
  const [showQuestions, setShowQuestions] = useState(false);

  // Function to handle the alarm setting
  const handleSetAlarm = (time) => {
    setAlarmTime(time);
    setShowQuestions(true);
  };

  return (
    <div className="App">
      <h1>Alarm Clock App</h1>
      <TimeDisplay alarmTime={alarmTime} />
      <AlarmSetter onSetAlarm={handleSetAlarm} />
      {showQuestions && <CodingQuestions />}
    </div>
  );
}

export default App;