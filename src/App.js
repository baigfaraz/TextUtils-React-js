
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';

export default function App() {

  return (
    <>
      <Navbar title="TextUtils"/>
      <div className='container'>
        <TextForms heading = "Enter the text to analyze"/>
      </div>
    </>
  );
}