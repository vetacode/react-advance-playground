import { useState, useEffect, useRef, useMemo } from 'react';
export default function CustomHook() {
  const [day, setDay] = useState('Monday');
  const [lastAction, setLastAction] = useState('null');
  const prevDay = usePrevious(day);
  const yesterday = useYesterday(day);
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
    setLastAction('next');
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
    setLastAction('previous');
  };

  return (
    <div className='section'>
      <h1>CustomHook</h1>
      <h2>
        Today is: {day}
        <br />
        {lastAction === 'next' ? (
          <span>Previous work day was: {prevDay}</span>
        ) : (
          <span>Previous work: {yesterday}</span>
        )}
        <br />
        {/* {getPreviousDay && <span>Previous work day was: {yesterday}</span>} */}
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

function useYesterday(day) {
  return useMemo(() => {
    switch (day) {
      case 'Monday':
        return 'Friday';
      case 'Tuesday':
        return 'Monday';
      case 'Wednesday':
        return 'Tuesday';
      case 'Thursday':
        return 'Wednesday';
      case 'Friday':
        return 'Thursday';
      default:
        return undefined;
    }
  }, [day]);
}
