import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GetQuote from "./Components/QuoteGenerator/GetQuote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetQuote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
