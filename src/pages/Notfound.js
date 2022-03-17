import React from 'react'
import Navigation from '../components/Navigation';
import NotfoundLogo from '../media/NotfoundLogo.png';
import '../styles/pages/notfound.css';

export default function Notfound() {
  return (
    <div className="Notfound">
      <header className="Notfound-header">
        <Navigation />
      </header>
      <div className="Notfound-body">
        <img id="Notfound-img" src={NotfoundLogo} alt="Notfound-img" />
      </div>
    </div>
  )
}
