import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './routers/Home';
import Calculator from './routers/Calculator';
import QuoteApi from './routers/Quote';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<QuoteApi />} />
      </Route>
    </Routes>
  );
}

export default App;
