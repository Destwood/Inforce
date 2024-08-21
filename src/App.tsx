import { useState } from "react";
import "./App.css";
import PostsList from "./components/PostsList/PostsList";
import SearchBar from "./components/SearchBar/SearchBar";
import Notification from "./components/Notification/Notification";

function App() {
  const [lastSearch, setLastSearch] = useState<string>("");
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const handleSearch = (searchQuery: string) => {
    setLastSearch(searchQuery);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  return (
    <div className="wrapper">
      <SearchBar onSearch={handleSearch} />
      <PostsList searchQuery={lastSearch} />

      {showNotification && <Notification text={lastSearch} />}
    </div>
  );
}

export default App;
