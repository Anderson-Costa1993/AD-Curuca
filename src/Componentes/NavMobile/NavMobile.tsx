import { useState } from "react";
import { LinkNav } from "../NavLink/link";
import fundoImage from "../../assets/log.ad-removebg-preview.png";
import { AlterTheme } from "../theme/theme";

export function MenuMobile() {
  const [onMenu, setOnMenu] = useState<boolean>(false);
  const [iconMenu, seticonMenu] = useState<string>("bi bi-list");

  const toggleMenu = () => {
    if (onMenu) {
      setOnMenu(false);
      seticonMenu("bi bi-list");
    } else {
      setOnMenu(true);
      seticonMenu("bi bi-x");
    }
  };

  return (
    <div className="md:hidden w-full">
      <section className="w-full flex items-center  p-2 z-50">
        <div className="flex justify-between items-center w-full">
        <button onClick={() => toggleMenu()}>
          <i
            className={`${iconMenu} text-slate-900 dark:text-slate-50`}
            style={{ fontSize: "28px"}}
          ></i>
        </button>
        <img src={fundoImage} alt="" className="w-[32px]" />
        <div>
            <AlterTheme />
          </div>
        </div>
      </section>
      {onMenu && (
        <nav className="z-50 flex absolute bg-slate-900/80 w-full">
          <ul className="flex flex-col items-start p-2 gap-2 text-slate-50">
            <li>
              <LinkNav href="/">Home</LinkNav>
            </li>
            <li>
              <LinkNav href="#">Eventos</LinkNav>
            </li>
            <li>
              <LinkNav href="#">Contatos</LinkNav>
            </li>
            <div className="flex items-center justify-center w-full gap-4">
            <LinkNav href="https://www.instagram.com/ad.curuca_inaciomonteiro/" target="_blank">
              <i className="bi bi-instagram"></i>
            </LinkNav>
            <LinkNav href="#">
              <i className="bi bi-facebook"></i>
            </LinkNav>
          </div>
          </ul>
        </nav>
      )}
    </div>
  );
}
