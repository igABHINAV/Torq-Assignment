import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Sidebar/>
        <Routes>
          <Route path='' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
