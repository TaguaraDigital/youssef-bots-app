import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./globalStyles";

import Dashboard from "./pages/home";
import Doc from "./pages/doc";
import Header from "./components/header";
import Footer from "./components/footer";
import SideBar from "./components/newSidebar";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Doc />} />
        </Routes>
      </SideBar>
      <Footer />
    </Router>
  );
}

export default App;
