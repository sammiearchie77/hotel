
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import FeaturePage from './pages/FeaturePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/pages/contact" element={<ContactPage/>} />
          <Route path="/pages/about" element={<AboutPage />} />
          <Route path="/pages/features" element={<FeaturePage/>} />
          <Route path="/pages/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
