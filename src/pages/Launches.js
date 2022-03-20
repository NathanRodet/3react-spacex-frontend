import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation';
import '../styles/pages/launches.css';
import LaunchesList from '../components/LaunchesList';
import WithListLoading from '../components/WithListLoading';

export default function Launches() {
  const ListLoading = WithListLoading(LaunchesList);
  const [appState, setAppState] = useState({
    loading: false,
    launches: null,
    error: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.spacex.land/rest/launches`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (launches) => {
          setAppState({ loading: false, launches: launches });
        },
        (error) => {
          setAppState({ loading: false, error });
        }
      );
  }, [setAppState]);

  return (
    <div className="Launches">
      <div className="Launches-header">
        <Navigation />
      </div>
      <div className="Launches-body">
        <h1>Launches</h1>
        <ListLoading isLoading={appState.loading} launches={appState.launches} />
      </div>
    </div>
  )
}
