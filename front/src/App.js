import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";
import Favorites from "./components/Favorites/Favorites";
import About from "./components/About/About";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";

function App() {

  const { pathname } = useLocation();
  return (
    <>
        
        {pathname === '/form' ? null : <NavBar />}
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/characters" element={<Cards />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/detail/:detailId" element={<Detail />}/>
          <Route path="/form" element={<Form />}/>
          <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </>
  );
};

export default App;
