import { Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Error404 from "./components/Error404/Error404";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
import Basket from "./pages/Basket";
import Warranty from "./pages/Warranty";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
