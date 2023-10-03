import React, { useState } from 'react';

function AlarmSetter({ onSetAlarm }) {
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleTimeChange = (e) => {
    setSelectedTime(new Date(e.target.value));
  };

  const handleSetAlarm = () => {
    onSetAlarm(selectedTime);
  };

  return (
    <div className="AlarmSetter">
      <h2>Set Alarm</h2>
      <input type="datetime-local" value={selectedTime.toISOString().slice(0, -8)} onChange={handleTimeChange} />
      <button onClick={handleSetAlarm}>Set Alarm</button>
    </div>
  );
}

export default AlarmSetter;