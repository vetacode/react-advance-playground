import { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    // Do something with the value
    console.log(inputValue);
  };
  return (
    <div className='section'>
      <h2>Uncontrolled Form</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input ref={inputRef} type='text' />
      </form>
    </div>
  );
}

const Form = () => {
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const files = fileInput.current.files;
    // Do something with the files here
    console.log(files);
  };

  return (
    <div className='section'>
      <h2>Uncontrolled Files Form</h2>
      <form onSubmit={handleSubmit}>
        <input ref={fileInput} type='file' />
      </form>
    </div>
  );
};

export { Form, UncontrolledForm };
