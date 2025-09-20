import { useState } from 'react';

// Child Component: EventForm
function EventForm({ addEvent }) {
  const [eventName, setEventName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName) {
      addEvent(eventName);
      setEventName(''); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        placeholder='Add an event'
      />
      <button disabled={!eventName} className='btn' type='submit'>
        Add Event
      </button>
    </form>
  );
}

// Child Component: EventList
export function EventList() {
  const [events, setEvents] = useState([]); // Each EventList manages its own state

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  return (
    <div className='section'>
      <h1>FamilyCalFalse</h1>
      <h2>Event List</h2>
      <EventForm addEvent={addEvent} />
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
}
