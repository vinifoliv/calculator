import './App.css';
import Display from './components/Display';

function App() {
  return (
    <main className='calculator'>

      <Display expression='0'/>

      <div className="button-set">

        <div className="numeral">7</div>
        <div className="numeral">8</div>
        <div className="numeral">9</div>
        <div id="btnAC" className="misc">AC</div>
        <div id="btnDivide" className="operator">&divide;</div>

        <div className="numeral">4</div>
        <div className="numeral">5</div>
        <div className="numeral">6</div>
        <div id="btnOpposite" className="misc">+/-</div>
        <div id="btnTimes" className="operator">&times;</div>

        <div className="numeral">1</div>
        <div className="numeral">2</div>
        <div className="numeral">3</div>
        <div id="btnPercentage" className="operator">&#37;</div>
        <div id="btnMinus" className="operator">&minus;</div>

        <div id="btnZero" className="numeral">0</div>
        <div className="numeral">.</div>
        <div id="btnEqual" className="operator">=</div>
        <div id="btnPlus" className="operator">+</div>

      </div>

    </main>
  );
}

export default App;