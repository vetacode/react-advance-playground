import { useState } from 'react';
import { validateEmail } from '../utils';

const PasswordErrorMessage = () => {
  return (
    <p className='FieldError'>Password should have at least 8 characters</p>
  );
};

const firstNameErrorMessage = () => {
  return <p className='FieldError'>Please enter your first name</p>;
};

const emailErrorMessage = () => {
  return <p className='FieldError'>Please enter a valid email</p>;
};

export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState({ value: '', isTouched: false });
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState({ value: '', isTouched: false });

  const [password, setPassword] = useState({
    value: '',
    isTouched: false,
  });

  const [role, setRole] = useState('role');

  const getIsFormValid = () => {
    return (
      firstName.value.trim() !== '' &&
      validateEmail(email.value) &&
      password.value.length >= 8 &&
      role !== 'role'
    );
  };

  // console.log(getIsFormValid());

  const clearForm = () => {
    setFirstName({ value: '', isTouched: false });
    setLastName('');
    setEmail({ value: '', isTouched: false });
    setPassword({ value: '', isTouched: false });
    setRole('role');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account created!');
    clearForm();
  };
  return (
    <div className='section'>
      <h2>Controlled Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <h3 className='FormTitle'>Sign Up</h3>

          <div className='Field'>
            <label>
              First name <sup>*</sup>
            </label>
            <input
              className='input'
              placeholder='First name'
              value={firstName.value}
              onChange={(e) =>
                setFirstName({ ...firstName, value: e.target.value })
              }
              onBlur={() => setFirstName({ ...firstName, isTouched: true })}
            />
            {firstName.isTouched && !firstName.value.trim()
              ? firstNameErrorMessage()
              : null}
          </div>

          <div className='Field'>
            <label>Last name</label>
            <input
              className='input'
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
              className='input'
              value={email.value}
              onChange={(e) => setEmail({ ...email, value: e.target.value })}
              onBlur={() => setEmail({ ...email, isTouched: true })}
              placeholder='Email address'
            />

            {email.isTouched && !validateEmail(email.value)
              ? emailErrorMessage()
              : null}
          </div>
          <div className='Field'>
            <label>
              Password <sup>*</sup>
            </label>
            <input
              className='input'
              type='password'
              value={password.value}
              placeholder='Password'
              onChange={(e) =>
                setPassword({ ...password, value: e.target.value })
              }
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className='Field'>
            <label>
              Role <sup>*</sup>
            </label>
            <select
              className='input'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
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
    </div>
  );
};
