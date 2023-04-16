import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
       <NavBar />
       <Routes>
        <Route path='/home' element={<Home />}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
