import { useState } from "react";
import GitHubInfo from "./components/GitHubInfo/GitHubInfo";
import Header from "./components/Header/Header";
import useGaTracker from "./hooks/useGaTracker";

function App() {
  useGaTracker();
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "rgba(20, 28, 47, 1)" : "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <GitHubInfo isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
