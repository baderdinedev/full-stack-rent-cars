import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer.jsx';
import Header from './components/layout/Header';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import Home from './pages/Home.jsx';
import Cars from './pages/Cars.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
