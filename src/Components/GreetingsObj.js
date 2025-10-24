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
    // const newGreeting = { ...greeting };
    // newGreeting.greet = 'Hello, World-Wide Web';
    // setGreeting(newGreeting);

    /* Best practice:*/
    setGreeting({ ...greeting, greet: 'Hello, World-Wide Web' });
  }

  return (
    <div className='section'>
      <h1>TrueGreetings</h1>
      <h2>{greeting.greet}</h2>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}

const SapaBenar = () => {
  const [menyapa, setMenyapa] = useState({sapa: 'Selamat Pagi'})
  const updateMenyapa = () => {
    setMenyapa({...menyapa, sapa: 'Ayo Kita Olahraga dan makan bubur'});
  }
  return (
    <div className='section'>
      <h1 >Sapalah Aku</h1>
      <h2 >{menyapa.sapa}</h2>
      <button onClick={updateMenyapa}>Sapa Aku Dong</button>
    </div>
  )

}

function CallBackGreetings() {
  const [greeting, setGreeting] = useState({
    greet: 'Hello',
    place: 'World',
  });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    setGreeting((prevState) => {
      return { ...prevState, place: 'World-Wide Web' };
    });
  }

  return (
    <div className='section'>
      <h1>CallBackGreetings</h1>
      <h2>
        {greeting.greet}, {greeting.place}
      </h2>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}

export { FalseGreetings, TrueGreetings, CallBackGreetings, SapaBenar };

/*
⚖️ Which one is best?

For single-field state: ✅ FalseGreetings (simplest).

For multi-field object state (synchronous updates): ✅ TrueGreetings (spread the object).

For multi-field object state (async or frequent updates): ✅ CallBackGreetings (functional updater) → most reliable and recommended.
*/

// ✅ So the winner is: CallBackGreetings.
// Because in React, state updates can be asynchronous and batched. Using the functional updater (prevState => ...) ensures you always get the latest snapshot, and spreading keeps other fields intact.
