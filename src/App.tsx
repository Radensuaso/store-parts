import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NavbarStoreParts from './components/NavbarStoreParts';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <NavbarStoreParts />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='cart' element={<Cart />} />
        <Route path='detail/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
