import { useState } from 'react';

const ControlledForm = () => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className='section'>
      <h2>Controlled Form</h2>
      <form>
        <input value={value} onChange={handleChange} type='text' />
      </form>
    </div>
  );
};

export default ControlledForm;
