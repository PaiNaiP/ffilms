import './App.css';
import { Home } from './Components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Admin } from './Components/Admin';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Admin/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
