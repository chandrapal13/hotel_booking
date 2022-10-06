import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Home } from './pages';
import About from './pages/AfterLogin/About/About';
import Contact from './pages/AfterLogin/Contact/Contact';
import Header from './pages/AfterLogin/Header/Header';
import NavBar from './pages/AfterLogin/NavBar/NavBar';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <NavBar />
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
