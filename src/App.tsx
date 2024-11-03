import './App.css';
import Display from './components/Display';

function App() {
  return (
    <main className='calculator'>

      <Display expression='1+1'/>

      <div className="button-set">
        <div className="button">7</div>
        <div className="button">8</div>
        <div className="button">9</div>
        <div id="btnAC" className="button">AC</div>
        <div id="btnDivide" className="button">&divide;</div>

        <div className="button">4</div>
        <div className="button">5</div>
        <div className="button">6</div>
        <div id="btnOpposite" className="button">+/-</div>
        <div id="btnTimes" className="button">&times;</div>

        <div className="button">1</div>
        <div className="button">2</div>
        <div className="button">3</div>
        <div id="btnPercentage" className="button">&#37;</div>
        <div id="btnMinus" className="button">&minus;</div>

        <div id="btnZero" className="button">0</div>
        <div className="button">.</div>
        <div id="btnEqual" className="button">=</div>
        <div id="btnPlus" className="button">+</div>
      </div>

    </main>
  );
}

export default App;