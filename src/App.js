import Calculator from './Components/Calculator';
import QuoteApi from './Components/Quote_API';

function App() {
  return (
    <section className="container">
      <QuoteApi />
      <Calculator />
    </section>
  );
}

export default App;
