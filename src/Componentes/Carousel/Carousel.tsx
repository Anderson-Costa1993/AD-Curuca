import CultoTerca from "../../assets/cultoTercaOfc.jpg";
import CultoMissoes from "../../assets/cultoMissoes.jpg";
import CultoMocidae from "../../assets/cultoMocidade.jpg";

export function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner rounded-xl">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src={CultoTerca} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={CultoMissoes} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={CultoMocidae} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
}
