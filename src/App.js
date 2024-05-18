import logo from './slime.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo sprite" alt="logo" />
        <p>
          innerchildgames
        </p>
        <p>
          <a
            className="App-link"
            href="https://innerchildgames.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            itch.io
          </a>
          <br/>
          <a
            className="App-link"
            href="https://www.youtube.com/channel/UCKTYK2yP7SqF3IFI24fR2Uw"
            target="_blank"
            rel="noopener noreferrer"
          >
            youtube
          </a>
        </p>

      </header>
    </div>
  );
}

export default App;
