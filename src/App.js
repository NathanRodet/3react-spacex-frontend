import { Routes, Route } from 'react-router-dom';
import './styles/pages/app.css';
import Home from './pages/Home.js';
import Launches from './pages/Launches.js';
import Notfound from './pages/Notfound.js';
import Launch from './pages/Launch';
import LaunchDetails from './components/LaunchDetails.js';

// https://reactrouter.com/docs/en/v6/getting-started/overview

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch" element={<Launch />}>
          <Route path=":launchid" element={<LaunchDetails />} />
        </Route>
        <Route path="/launches" element={<Launches />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div >
  );
}

export default App;


