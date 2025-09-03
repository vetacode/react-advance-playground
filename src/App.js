import './App.css';
import { UseCallbackBest, UseCallbackBad } from './Components/BestBadPractices';

import ControlledForm from './Components/ControlledForm';
import FetchCrypto from './Components/FetchingData';
import FetchCustData from './Components/FetchCustData';
import {
  CallBackGreetings,
  FalseGreetings,
  TrueGreetings,
} from './Components/GreetingsObj';
import LowCalDesserts from './Components/LowCalDesserts';
import GiftCard from './Components/ManagingState';
import { RegistrationForm } from './Components/RegistrationForm';
import { ThemeSwitcher } from './Components/ThemeSwitcher';
import { UncontrolledForm, Form } from './Components/UncontrolledForm';
import { ThemeProvider } from './Context/ThemeContext';
import CustomHook from './Components/CustomHook';
import ReactClone from './Components/ReactCloneRadio';
import RenderProp from './Components/RenderProp';

function App() {
  return (
    <div className='App'>
      <UseCallbackBad />
      <UseCallbackBest />
      <LowCalDesserts />
      <UncontrolledForm />
      <ControlledForm />
      <Form />
      <RegistrationForm />
      <ThemeSwitcher />
      <FalseGreetings />
      <TrueGreetings />
      <CallBackGreetings />
      <GiftCard />
      <FetchCrypto />
      <FetchCustData />
      <CustomHook />
      <ReactClone />
      <RenderProp />
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
