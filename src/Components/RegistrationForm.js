import { useState } from 'react';
import { validateEmail } from '../utils';

const PasswordErrorMessage = (password) => {
  if (password.value.length < 8) {
    return (
      <p className='FieldError'>Password should have at least 8 characters</p>
    );
  }
};

export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState({
    value: '',
    isTouched: false,
  });

  const [role, setRole] = useState('role');

  // const invalidForm = () => {
  //   return <p className='FieldError'>Please fill in all the required fields</p>;
  // };

  // const getIsFormValid = () => {
  //   if (
  //     firstName !== '' &&
  //     email !== '' &&
  //     validateEmail(email) &&
  //     password.value !== '' &&
  //     password.value.length >= 8 &&
  //     role !== 'role'
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== 'role'
    );
  };

  console.log(getIsFormValid());

  // const getIsFormValid = () => {
  //   console.log('firstName:', firstName !== '');
  //   console.log('email:', email !== '');
  //   console.log('validateEmail:', validateEmail(email));
  //   console.log('password not empty:', password.value !== '');
  //   console.log('password length >= 8:', password.value.length >= 8);
  //   console.log('role:', role !== 'role');

  //   return (
  //     firstName.trim() !== '' &&
  //     email.trim() !== '' &&
  //     validateEmail(email) &&
  //     password.value.trim() !== '' &&
  //     password.value.length >= 8 &&
  //     role !== 'role'
  //   );
  // };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword({ value: '', isTouched: false });
    setRole('role');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account created!');
    clearForm();
  };
  return (
    <>
      <div className='section'>
        <h2>Registration Form</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className='Field'>
            <label>
              First name <sup>*</sup>
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='First name'
            />
          </div>
          <div className='Field'>
            <label>Last name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Last name'
            />
          </div>
          <div className='Field'>
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email address'
            />
          </div>
          <div className='Field'>
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type='password'
              value={password.value}
              onChange={(e) => setPassword({ value: e.target.value })}
              placeholder='Password'
              onBlur={(e) => {
                setPassword({ value: e.target.value, isTouched: true });
              }}
            />
            {password.isTouched && PasswordErrorMessage(password)}
          </div>
          <div className='Field'>
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value='role'>Role</option>
              <option value='individual'>Individual</option>
              <option value='business'>Business</option>
            </select>
          </div>
          <button type='submit' disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </>
  );
};
