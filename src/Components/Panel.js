import './Panel.css';

function Panel() {
  return (
    <div className="panel">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button className="operators" type="button">&divide;</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button className="operators" type="button">x</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button className="operators" type="button">-</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button className="operators" type="button">+</button>
      <button className="special" type="button">0</button>
      <button type="button">.</button>
      <button className="operators" type="button">=</button>
    </div>
  );
}

export default Panel;
