import "./index.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Componentes/NavBar/NavBar";
import { Footer } from "./Componentes/Footer/Footer";
import { BgMain } from "./Componentes/BgMain/BgMain";
import { BannerEspecial } from "./Componentes/BannerEspecial/BannerEspecial";


function App() {
  return (
    <div className=" w-full flex flex-col bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <BgMain />
      <BannerEspecial />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
