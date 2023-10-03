import React, { useState } from 'react';
import './App.css';

import timeDisplay from './components/timeDisplay';
import alarmSetter from './components/alarmSetter';
import codingQuestions from './components/codingQuestions';

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
      <timeDisplay alarmTime={alarmTime} />
      <alarmSetter onSetAlarm={handleSetAlarm} />
      {showQuestions && <codingQuestions />}
    </div>
  );
}

export default App;