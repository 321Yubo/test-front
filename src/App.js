import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layoutui from '@/pages/Layoutui'
import Home from './pages/Home';
import About from './pages/About';
import './App.css'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layoutui/> }>
            <Route index element={<Home/>}></Route>
            <Route path='/About' element={<About />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
