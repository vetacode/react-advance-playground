import './App.css';
import ControlledForm from './Components/ControlledForm';
import LowCalDesserts from './Components/LowCalDesserts';
import { RegistrationForm } from './Components/RegistrationForm';
import { UncontrolledForm, Form } from './Components/UncontrolledForm';
// import Form from './Components/UncontrolledForm';
function App() {
  return (
    <div className='App'>
      <LowCalDesserts />
      <UncontrolledForm />
      <ControlledForm />
      <Form />
      <RegistrationForm />
    </div>
  );
}

export default App;
