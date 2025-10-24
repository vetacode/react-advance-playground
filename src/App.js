import './App.css';
import { UseCallbackBest, UseCallbackBad } from './Components/BestBadPractices';

import ControlledForm from './Components/ControlledForm';
import FetchCrypto from './Components/FetchingData';
import FetchCustData from './Components/FetchCustData';
import {
  CallBackGreetings,
  FalseGreetings,
  SapaBenar,
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
import { EventList } from './Components/FamilyCalFalse';
import { FamilyCalendar } from './Components/FamilyCalTrue';

function App() {
  return (
    <div className='App'>
      {/* <UseCallbackBad /> */}
      {/* <UseCallbackBest /> */}
      <LowCalDesserts />
      <UncontrolledForm />
      <ControlledForm />
      <Form />
      <RegistrationForm />
      <ThemeSwitcher />
      <FalseGreetings />
      <TrueGreetings />
      <SapaBenar/>
      <CallBackGreetings />
      <GiftCard />
      <FetchCrypto />
      <FetchCustData />
      <CustomHook />
      <ReactClone />
      <RenderProp />
      <EventList />
      <FamilyCalendar />
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
