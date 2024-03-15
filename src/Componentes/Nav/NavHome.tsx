import fundoImage from "../../assets/log.ad-removebg-preview.png";
import style from "./navHome.module.css";
import { MenuMobile } from "../NavMobile/NavMobile";

export function NavPageHome() {
  return (
    <div className={style["container-principal"]}>
      <div className={style["menu-mobile"]}>
        <MenuMobile />
      </div>
      <img src={fundoImage} alt="" className={style["img-logo"]} />
      <section className={style["section-nav"]}>
        <div className={style["container-title"]}>
          <h1 className={style["title-bem-vindo"]}>
            Seja Bem vindo! <span>Assembleia de Deus Ministério do Curuça</span>
          </h1>
        </div>
        <nav>
          <ul className={style["container-list"]}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/eventos">Eventos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </section>
      <div className={style["container-redes"]}>
        <div className={style["container-icon-face"]}>
          <i className="bi bi-facebook"></i>
        </div>
        <div className={style["container-icon-insta"]}>
          <a href="https://www.instagram.com/ad.curuca_inaciomonteiro/?utm_source=ig_web_button_share_sheet">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
