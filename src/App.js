import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import News from "./pages/News";
import NewsRedux from "./pages/NewsRedux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/category/all"} />} />
          <Route path="/category/:category" element={<NewsRedux />} />
          <Route path="/category/:category/:id" element={<NewsRedux />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
