import './App.css';
import ControlledForm from './Components/ControlledForm';
import {
  CallBackGreetings,
  FalseGreetings,
  TrueGreetings,
} from './Components/GreetingsObj';
import LowCalDesserts from './Components/LowCalDesserts';
import { RegistrationForm } from './Components/RegistrationForm';
import { ThemeSwitcher } from './Components/ThemeSwitcher';
import { UncontrolledForm, Form } from './Components/UncontrolledForm';
import { ThemeProvider } from './Context/ThemeContext';

function App() {
  return (
    <div className='App'>
      <LowCalDesserts />
      <UncontrolledForm />
      <ControlledForm />
      <Form />
      <RegistrationForm />
      <ThemeSwitcher />
      <FalseGreetings />
      <TrueGreetings />
      <CallBackGreetings />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
