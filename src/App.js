import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Adminapplication from './pages/adminApplication/Adminapplication';
import Application from './pages/applications/Application';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/application' element={<Application />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin/application' element={<Adminapplication />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
