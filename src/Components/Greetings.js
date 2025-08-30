import { useState } from 'react';

function FalseGreetings() {
  const [greeting, setGreeting] = useState({ greet: 'Hello, World' });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    setGreeting({ greet: 'Hello, World-Wide Web' });
  }

  return (
    <div className='section'>
      <h1>FalseGreetings</h1>
      <h2>{greeting.greet}</h2>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}

function TrueGreetings() {
  const [greeting, setGreeting] = useState({ greet: 'Hello, World' });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    const newGreeting = { ...greeting };
    newGreeting.greet = 'Hello, World-Wide Web';
    setGreeting(newGreeting);
  }

  return (
    <div className='section'>
      <h1>TrueGreetings</h1>
      <h2>{greeting.greet}</h2>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}

export { FalseGreetings, TrueGreetings };
