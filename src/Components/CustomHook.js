import { useState, useEffect, useRef } from 'react';
export default function CustomHook() {
  const [day, setDay] = useState('Monday');
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === 'Monday') {
      setDay('Tuesday');
    } else if (day === 'Tuesday') {
      setDay('Wednesday');
    } else if (day === 'Wednesday') {
      setDay('Thursday');
    } else if (day === 'Thursday') {
      setDay('Friday');
    } else if (day === 'Friday') {
      setDay('Monday');
    }
  };

  const getPreviousDay = () => {
    if (day === 'Monday') {
      setDay('Friday');
    } else if (day === 'Tuesday') {
      setDay('Monday');
    } else if (day === 'Wednesday') {
      setDay('Tuesday');
    } else if (day === 'Thursday') {
      setDay('Wednesday');
    } else if (day === 'Friday') {
      setDay('Thursday');
    }
  };

  return (
    <div className='section'>
      <h1>CustomHook</h1>
      <h2>
        Today is: {day}
        <br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h2>
      <button onClick={getNextDay}>Get next day</button>
      <button onClick={getPreviousDay}>Get previous day</button>
    </div>
  );
}
function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}
