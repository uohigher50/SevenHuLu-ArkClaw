import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Map from './pages/Map';
import Xinjiang2026 from './pages/Xinjiang2026';
import Families from './pages/Families';
import Meetings from './pages/Meetings';
import QA from './pages/QA';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/map" element={<Map />} />
        <Route path="/xinjiang-2026" element={<Xinjiang2026 />} />
        <Route path="/families" element={<Families />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/qa" element={<QA />} />
      </Routes>
    </Router>
  );
}

export default App;
