import './Calculator.css';
import Panel from './Panel';

function Calculator() {
  return (
    <section>
      <div className="result">
        <span>0</span>
      </div>
      <Panel />
    </section>
  );
}

export default Calculator;