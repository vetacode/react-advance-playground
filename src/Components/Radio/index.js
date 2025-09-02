import * as React from 'react';
import './styles.css';

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    });
  });

  return <div className='RadioGroup'>{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  // const [wasChecked, setWasChecked] = React.useState('');

  // const handleChange = (e) => {
  //   if (checked && wasChecked) {
  //     if (onChange) onChange(null);
  //     setWasChecked(false);
  //   } else {
  //     if (onChange) onChange(e.target.value);
  //     setWasChecked(true);
  //   }
  // };

  // if (!checked && wasChecked) {
  //   setWasChecked(false);
  // }

  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className='RadioOption'>
      <input
        type='radio'
        id={value}
        name={value}
        value={value}
        checked={checked}
        onChange={handleChange}
        readOnly
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
