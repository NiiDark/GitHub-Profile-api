import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const useGaTracker = () => {
   const location = useLocation();
   const [initialized, setInitialized] = useState(false);

   useEffect(() => {
      if (!window.location.href.includes('localhost')) {
         ReactGA.initialize('G-3P1Z9GW8N3');
      }
      setInitialized(true);
   }, []);

   useEffect(() => {
      if (initialized) {
         ReactGA.pageview(location.pathname + location.search);
      }
   }, [initialized, location]);

   console.log(initialized);
};

export default useGaTracker;
