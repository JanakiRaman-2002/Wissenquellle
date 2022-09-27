import './App.css';
import EmailVerify from './components/EmailVerify';
import EmailVerifyCode from './components/EmailVerifyCode';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <EmailVerifyCode />
    </div>
  );
}

export default App;
