import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import AmiiboList from "./pages/AmiiboList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amiibos" element={<AmiiboList />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;