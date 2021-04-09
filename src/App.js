import tree from './images/tree.png'
import './App.scss';

function App() {
  return (
    <div className="App">

      <div className="menu">
        <div className="menu-card">
          <div className="menu-image-container">
            <img src={tree} alt="tree" />
          </div>
          <h3>texte</h3>
        </div>
      </div>

      <div className="main">
        <div className="main-card">
          <div className="main-image-container">
            <img src={tree} alt="tree" />
          </div>
          <h3>texte</h3>
        </div>
      </div>

    </div>
  );
}

export default App;
