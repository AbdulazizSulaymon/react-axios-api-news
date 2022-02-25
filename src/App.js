import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
