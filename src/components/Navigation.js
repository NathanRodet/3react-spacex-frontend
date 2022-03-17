import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navigation.css';

export default function Navigation() {
  return (
    <div className="Navigation-component">
      <nav className="Navigation-bar">
        <ul className="Navigation-list">
          <li className="Navigation-item">
            <Link className="Navigation-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="Navigation-link" to="Launches">Launches</Link>
          </li>
        </ul >
      </nav >
    </div >
  )
}
