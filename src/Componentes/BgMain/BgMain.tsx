import bgImage from "../../assets/bgCuruca02.jpg";
import logo from "../../assets/log.ad-removebg-preview.png";

export function BgMain() {
  const divStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    height: "100vh", // Ajuste conforme necessário
  };

  return (
    <div className="relative h-screen" style={{ fontFamily: " Khand, serif" }}>
      <div style={divStyle} className="absolute inset-0">
        {/* Conteúdo do seu componente aqui */}
      </div>
      <div className="absolute inset-0 bg-black opacity-70 dark:brightness-50 dark:opacity-80"></div>
      <div
        className="absolute inset-0 flex flex-col text-slate-50 uppercase  text-[14px] tracking-[1.5px] justify-center
      items-center z-40 leading-loose gap-4 "
      >
        <div className="border-1 border-slate-600/50 m-1 p-8 rounded-full">
          <div className=" w-48 h-48 border-2 border-slate-600/90 p-10 rounded-full flex flex-col items-center justify-center">
            <img src={logo} alt="" className="w-32 " />
            <span className="text-slate-300">#ADCURUÇÁ</span>
          </div>
        </div>
        <div className="flex flex-col items-center mx-5 text-center text-white">
          <span>Respondeu-lhes Jesus:</span>
          <span>
            Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai, senão
            por mim.
          </span>
          <span>João 14:6</span>
        </div>
      </div>
    </div>
  );
}
