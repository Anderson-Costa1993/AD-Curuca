import fundoImage from "../../assets/log.ad-removebg-preview.png";

export function Footer() {
  return (
    <footer className="m-auto md:w-[1280px] ">
      <div className="flex flex-col justify-center items-center w-full gap-2">
        <div className="flex items-center w-full">
          <div className="flex flex-col justify-center items-center w-full gap-8">
            <div className="flex flex-col justify-center items-center w-full gap-2  text-xs text-zinc-900  dark:text-slate-50 md:text-sm">
              <h1>MINISTERIO VILA CURUÇA - SANTO ANDRÉ - SP</h1>
              <h2>CONGREGAÇÃO INÁCIO MONTEIRO</h2>
            </div>
            <section className="flex flex-col items-center gap-4 justify-center w-full border-t border-sky-800/40 p-4 md:flex-row md:justify-around">
              <div className="w-32">
                <img
                  className="w-16 m-auto"
                  src={fundoImage}
                  alt="Descrição da imagem"
                />
              </div>
              <table className="w-9/12 text-xs text-center md:w-4/12">
                <thead className="my-4">
                  <tr className="text-sky-800 dark:text-sky-400">
                    <th>CULTOS</th>
                    <th>DE</th>
                    <th>HORÁRIOS</th>
                  </tr>
                </thead>
                <tbody className=" dark:text-slate-50">
                  <tr>
                    <td>TERÇA-FEIRA</td>
                    <td>DOUTRINA</td>
                    <td>19:30</td>
                  </tr>
                  <tr>
                    <td>QUINTA-FEIRA</td>
                    <td>CAMPANHA</td>
                    <td>19:30</td>
                  </tr>
                  <tr>
                    <td>SÁBADO</td>
                    <td>ESPCIAL</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td>DOMINGO</td>
                    <td>CULTO DA FAMILIA</td>
                    <td>18:00</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex flex-col gap-2 text-sm  dark:text-slate-50">
                <h1 className="font-bold text-center">Nossas Redes</h1>
                <div className="flex justify-center gap-2">
                  <i className="bi bi-facebook text-blue-600 cursor-pointer"></i>
                  <i className="bi bi-instagram text-rose-600 cursor-pointer"></i>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="text-sky-950 dark:text-slate-50">
          <p>Copyright© Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
