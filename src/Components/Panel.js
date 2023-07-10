import './Panel.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Panel({ buttonEvents }) {
  let [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const event = (event) => {
    const result = Array.from(document.getElementsByTagName('span'));
    const action = event.target.name;
    setObj(buttonEvents(obj, action));
    result[0].innerHTML = obj.next || obj.total || '0';
  };
  return (
    <div className="panel">
      <button name="AC" type="button" onClick={event}>AC</button>
      <button name="+/-" type="button" onClick={event}>+/-</button>
      <button name="%" type="button" onClick={event}>%</button>
      <button name="&divide;" className="operators" type="button" onClick={event}>&divide;</button>
      <button name="7" type="button" onClick={event}>7</button>
      <button name="8" type="button" onClick={event}>8</button>
      <button name="9" type="button" onClick={event}>9</button>
      <button name="x" className="operators" type="button" onClick={event}>x</button>
      <button name="4" type="button" onClick={event}>4</button>
      <button name="5" type="button" onClick={event}>5</button>
      <button name="6" type="button" onClick={event}>6</button>
      <button name="-" className="operators" type="button" onClick={event}>-</button>
      <button name="1" type="button" onClick={event}>1</button>
      <button name="2" type="button" onClick={event}>2</button>
      <button name="3" type="button" onClick={event}>3</button>
      <button name="+" className="operators" type="button" onClick={event}>+</button>
      <button name="0" className="special" type="button" onClick={event}>0</button>
      <button name="." type="button" onClick={event}>.</button>
      <button name="=" className="operators" type="button" onClick={event}>=</button>
    </div>
  );
}

Panel.propTypes = {
  buttonEvents: PropTypes.func.isRequired,
};

export default Panel;
