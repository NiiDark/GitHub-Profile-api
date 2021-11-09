//import { useState } from 'react';
import GitHubInfo from './components/GitHubInfo/GitHubInfo';
import Header from './components/Header/Header';

function App() {
   // const [pageLoading, setPageLoading] = useState(true);
   // window.onload = () => {
   //    setPageLoading(false);
   // };
   return (
      <>
         <Header />
         <GitHubInfo />
      </>
   );
}

export default App;
