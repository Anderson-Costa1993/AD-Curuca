import { useState, useEffect } from "react";
import fundoImage from "../../assets/log.ad-removebg-preview.png";
import { LinkNav } from "../NavLink/link";
import { MenuMobile } from "../NavMobile/NavMobile";
import { AlterTheme } from "../theme/theme";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full z-50 ">
      <div
        className={`flex justify-center w-full  ${
          scrolled ? "bg-gray-800" : ""
        }`}
      >
        <MenuMobile />
        <nav
          className={`fixed z-50 hidden px-2 w-screen py-2 gap-3 text-slate-50 lg:flex ${
            scrolled ? "bg-slate-50 border-b-2 border-slate-/50 dark:bg-slate-950 dark:border-b-2 dark:border-b-blue-500/10 dark:shadow-lg dark:shadow-blue-500/20" : ""
          } lg:justify-center lg:items-center w-full`}
        >
          <div className="w-3/5 flex items-center justify-between">
          <div className="hidden px-3 py-3 bg-transparent rounded-lg items-center gap-3 text-slate-50 lg:flex">
            <img src={fundoImage} alt="" className={`w-[38px]  ${
          scrolled ? "" : "hidden"
        }`} />
            <LinkNav href="/">Home</LinkNav>
            <LinkNav href="#">Eventos</LinkNav>
            <LinkNav href="#">Contatos</LinkNav>
            <LinkNav href="https://www.instagram.com/ad.curuca_inaciomonteiro/" target="_blank">
              <i className="bi bi-instagram"></i>
            </LinkNav>
            <LinkNav href="#">
              <i className="bi bi-facebook"></i>
            </LinkNav>
          </div>
          <div>
            <AlterTheme />
          </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
