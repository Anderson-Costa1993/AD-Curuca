import "./index.css";
import { Outlet } from "react-router-dom";
import { NavPageHome } from "./Componentes/Nav/NavHome";
import { Footer } from "./Componentes/Footer/Footer";

function App() {
  return (
    <>
      <NavPageHome />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
