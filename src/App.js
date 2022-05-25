import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './globalStyles';

import Shipment from './pages/shipment';
import Dashboard from './pages/dashboard';
import Doc from './pages/doc';
import Header from './components/header';
import Footer from './components/footer';
import SideBar from './components/newSidebar';
import Landing from './pages/landing';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <SideBar>
        <Routes>
          <Route path="/shipment" element={<Shipment />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Doc />} />
        </Routes>
      </SideBar>
      <Footer />
    </Router>
  );
}

export default App;
