import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import GetInvolved from './pages/GetInvolved';
import Home from './pages/Home';
import Project from './pages/Project';
import Work from './pages/Work';
import WhoWeAre from './pages/WhoWeAre';
import ContactUs from './pages/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/who-we-are' element={<WhoWeAre />} />
        <Route path='/project' element={<Project />} />
        <Route path='/get-involved' element={<GetInvolved />} />
        <Route path='/our-work' element={<Work />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
