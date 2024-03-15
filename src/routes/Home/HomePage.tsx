import { QuadroAvisos } from "../../Componentes/QuadroAvisos/QuardroAvisos";
import style from "./homePage.module.css";
import { CarouselPage } from "../../Componentes/Carousel/CarouselPage";

export function HomePage() {
  return (
    <div className={style["container-principal"]}>
      <section className={style["section-quadro-avisos"]}>
        <div className={style["container-quadro-avisos"]}>
          <QuadroAvisos />
        </div>
        <div className={style["container-carousel"]}>
          <CarouselPage />
        </div>
      </section>
      <div className={style["container-localization"]}>
        <h1>Nossa Localização</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.2414211474064!2d-46.402080930418734!3d-23.56967589867462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce659d782de4cf%3A0x9f98bc5fa63884f!2sR.%20Cachoeira%20Camale%C3%A3o%2C%2090%20-%20Conj.%20Hab.%20Inacio%20Monteiro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008472-150!5e0!3m2!1spt-BR!2sbr!4v1705971926176!5m2!1spt-BR!2sbr"
          width="90%"
          height="300"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
