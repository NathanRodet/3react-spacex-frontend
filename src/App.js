import { Routes, Route } from 'react-router-dom';
import './styles/pages/app.css';
import Home from './pages/Home.js';
import Launches from './pages/Launches.js';
import Notfound from './pages/Notfound.js';
import Launch from './pages/Launch';

// https://reactrouter.com/docs/en/v6/getting-started/overview

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Launch" element={<Launch />}>
          <Route path="/Launch:launchid" element={<Launch />} />
        </Route>
        <Route path="/Launches" element={<Launches />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div >
  );
}

export default App;
