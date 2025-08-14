import SearchBar from "./components/SearchBar";
import User from "./components/User";
import Buttons from "./components/Buttons";
import "./App.css";
function App() {
  let users = [
    { name: "Caroline Bloeme", checked: false },
    { name: "Sun Jun", checked: true },
    { name: "Song Bao", checked: false },
    { name: "Olivia Arribas", checked: true },
    { name: "Bonginkosi Mdladlana", checked: false },
    { name: "Arina Belomestnykh", checked: true },
    { name: "Jacqueline Likoki", checked: true },
  ];
  return (
    <div className="App-header">
      <h1 className="App-title">Add members to Front-End development team</h1>
      <div className="App-body">
        <SearchBar />
        {users.map((user) => {
          return <User name={user.name} checked={user.checked} />;
        })}
        <Buttons />
      </div>
    </div>
  );
}

export default App;
