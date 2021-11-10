import { useState } from 'react';
import GitHubInfo from './components/GitHubInfo/GitHubInfo';
import Header from './components/Header/Header';

function App() {
   // const [pageLoading, setPageLoading] = useState(true);
   // window.onload = () => {
   //    setPageLoading(false);
   // };
   const [isDarkMode, setisDarkMode] = useState(true);
   return (
      <div
         style={{
            backgroundColor: isDarkMode ? 'rgba(20, 28, 47, 1)' : '#fff',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
         }}
      >
         <Header isDarkMode={isDarkMode} setisDarkMode={setisDarkMode} />
         <GitHubInfo isDarkMode={isDarkMode} />
      </div>
   );
}

export default App;
