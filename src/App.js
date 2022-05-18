import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./globalStyles";

import Home from "./pages/home";
import Doc from "./pages/doc";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doc" element={<Doc />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
