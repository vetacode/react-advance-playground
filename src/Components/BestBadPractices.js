import { useCallback } from 'react';
const UseCallbackBad = () => {
  const handleClick = () => console.log('Bad');
  return <button onClick={handleClick}>UseCallbackBad</button>;
};

const UseCallbackBest = () => {
  const handleClick = useCallback(() => console.log('Best'), []);
  return <button onClick={handleClick}>UseCallbackBest</button>;
};

export { UseCallbackBad, UseCallbackBest };
