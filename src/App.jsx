import Header from "./components/Header";
import SongList from "./components/SongList";
import NowPlaying from "./components/NowPlaying";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <NowPlaying />
        <SongList />
      </div>
    </div>
  );
}

export default App;