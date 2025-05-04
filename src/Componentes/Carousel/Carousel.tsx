import CultoMoc from "../../assets/cultoMocidade.jpg";
import CultoCamp from "../../assets/cultoCampanha.jpg";

export function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner rounded-xl">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={CultoCamp} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <img src={CultoMoc} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
