import "./index.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Componentes/NavBar/NavBar";
import { Footer } from "./Componentes/Footer/Footer";
import { BgMain } from "./Componentes/BgMain/BgMain";


function App() {
  return (
    <div className="flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="w-full">
      <Navbar />
      <BgMain />
      <Outlet />
      <Footer />
      </div>
    </div>
  );
}

export default App;
