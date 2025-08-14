import SearchBar from "./components/SearchBar";
import User from "./components/User";
import "./App.css";
function App() {
  return (
    <div className="App-header">
      <h1 className="App-title">Add members to Front-End development team</h1>
      <div className="App-body">
        <SearchBar />
        <User name="Caroline Bloeme" checked={false} />
        <User name="Sun Jun" checked={true} />
        <User name="Song Bao" checked={false} />
        <User name="Olivia Arribas" checked={true} />
        <User name="Bonginkosi Mdladlana" checked={false} />
        <User name="Arina Belomestnykh" checked={true} />
        <User name="Jacqueline Likoki" checked={true} />
      </div>
    </div>
  );
}

export default App;
