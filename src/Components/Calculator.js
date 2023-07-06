import calculate from '../Logic/Calculate';
import './Calculator.css';
import Panel from './Panel';

function Calculator() {
  return (
    <section className="calculator">
      <div className="result">
        <span>0</span>
      </div>
      <Panel buttonEvents={calculate} />
    </section>
  );
}

export default Calculator;
