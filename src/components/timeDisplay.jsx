import React from 'react';
import './timeDisplay.css'
function TimeDisplay({ alarmTime }) {
  return (
    <div className="TimeDisplay">
      {alarmTime ? (
        <p>Alarm set for {alarmTime.toLocaleTimeString()}</p>
      ) : (
        <p>Current Time: {new Date().toLocaleTimeString()}</p>
      )}
    </div>
  );
}

export default TimeDisplay;