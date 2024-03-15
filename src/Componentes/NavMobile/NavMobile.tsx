import stytle from "./NavMobile.module.css";

export function MenuMobile() {
  return (
    <div className="dropdown">
      <button
        className="btn"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <i className="bi bi-list" style={{ fontSize: "28px" }}></i>
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/eventos">
            Eventos
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Contato
          </a>
        </li>
        <div className={stytle["container-redes"]}>
          <div className={stytle["container-icon-face"]}>
            <i className="bi bi-facebook"></i>
          </div>
          <div className={stytle["container-icon-insta"]}>
            <a href="https://www.instagram.com/ad.curuca_inaciomonteiro/?utm_source=ig_web_button_share_sheet">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </ul>
    </div>
  );
}
