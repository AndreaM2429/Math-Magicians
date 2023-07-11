import calculate from '../Logic/Calculate';
import '../styles/Calculator.css';
import Panel from './Panel';

function CalculatorApp() {
  return (
    <section className="calculator">
      <div className="result">
        <span title="span">0</span>
      </div>
      <Panel buttonEvents={calculate} />
    </section>
  );
}

export default CalculatorApp;
