import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Details from './pages/details/Details'
import Search from './pages/search/Search'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
