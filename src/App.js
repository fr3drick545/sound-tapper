import './App.css';

function App() {
  const playSound = () => {
    // Create a new Audio instance each time to allow overlapping sounds
    const audio = new Audio('/lizard.ogg');
    audio.currentTime = 0;
    
    // Stop the audio after 1 second
    audio.addEventListener('loadeddata', () => {
      setTimeout(() => {
        audio.pause();
        audio = null;
        delete audio;
      }, 800);
    });
    
    audio.play().catch(error => {
      console.error('Error playing sound:', error);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Sound Tapper</h1> */}
        <button 
          className="tap-button"
          onClick={playSound}
          style={{ fontSize: '96px', overflow: "hidden" }}
        >
          <img src="liztom1.png" alt="🦎" style={{ width: '100%', transform: "translate(-3%, 20%)" }} />
        </button>
        {/* <p>Click or tap the button to play sounds!</p>
        <p>You can spam it - sounds won't cut each other off!</p> */}
      </header>
    </div>
  );
}

export default App;
