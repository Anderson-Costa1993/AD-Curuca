import style from "./footer.module.css";
import fundoImage from "../../assets/log.ad-removebg-preview.png";

export function Footer() {
  return (
    <div className={style["container-footer"]}>
      <div className={style["container-logo"]}>
        <img src={fundoImage} alt="Descrição da imagem" />
      </div>
      <p>Copyright © Todos os direitos reservados</p>
    </div>
  );
}
