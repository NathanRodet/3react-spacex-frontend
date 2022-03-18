import React from 'react'
import '../styles/pages/home.css';
import Navigation from '../components/Navigation';


export default function Home() {

  return (
    <div className="Home" >
      <div className="Home-header">
        <Navigation />
      </div>
      <div className="Home-body">
        <h1>Welcome to the home page</h1>
      </div>
    </div >
  )
}
