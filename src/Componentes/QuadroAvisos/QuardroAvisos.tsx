import { EventosType } from "../../types";
import moment from "moment";
import "moment/dist/locale/pt-br";
import { supabase } from "../../supabaseConfig";
import { useEffect, useState } from "react";

export function QuadroAvisos() {
  const [eventos, setEventos] = useState<EventosType[]>([]);
  const [filtroMes, setFiltroMes] = useState<number | null>(null);
  const [filtroSemana, setFiltroSemana] = useState<number | null>(null);

  useEffect(() => {
    const dados = async () => {
      const { data } = await supabase.from("Events").select();
      setEventos(data || []);
    };
    dados();
  }, []);

  const semanasDisponiveis = () => {
    if (filtroMes !== null) {
      const primeiroDiaDoMes = moment()
        .month(filtroMes - 1)
        .startOf("month");

      const semanasDoMes = [];

      let currentDay: moment.Moment = primeiroDiaDoMes.clone();

      while (
        currentDay.isBefore(primeiroDiaDoMes.clone().endOf("month")) ||
        currentDay.isSame(primeiroDiaDoMes.clone().endOf("month"), "week")
      ) {
        semanasDoMes.push(currentDay.isoWeek());
        currentDay = currentDay.clone().add(1, "week");
      }

      // Remove semanas duplicadas
      const semanasUnicas = [...new Set(semanasDoMes)];

      return semanasUnicas;
    }

    return [...Array(moment().isoWeeksInYear()).keys()].map(
      (semana) => semana + 1
    );
  };

  const filterEvents = (evento: EventosType) => {
    const dataMoment = moment(evento.Data, "YYYY-MM-DD");
    const now = moment();

    // Verifica se o evento ocorre no mesmo mês e na mesma semana, se os filtros estiverem definidos
    const isSameMonth =
      filtroMes === null || dataMoment.month() === filtroMes - 1;
    const isSameWeek =
      filtroSemana === null || dataMoment.isoWeek() === filtroSemana;

    // Verifica se o evento é do dia de hoje ou se é no futuro
    if (dataMoment.isSameOrAfter(now, "day")) {
      console.log("Evento incluído");
      return isSameMonth && isSameWeek;
    }

    console.log("Evento excluído");
    return false;
  };

  return (
    <div className="border-1 border-blue-950/2000 shadow-2xl  shadow-blue-500/50 p-3 rounded-lg text-slate-900 font-bold flex flex-col dark:border-blue-600/20 dark:shadow-lg dark:shadow-blue-500/50">
      <div className="flex items-center justify-center p-3 gap-4">
        <section className=" flex gap-4 p-2" >
          <label className="text-xs/[12px] uppercase dark:bg-slate-950 dark:text-slate-50">
            Mês:
            <select
              className="text-slate-950 cursor-pointer dark:bg-slate-950 dark:text-slate-50"
              value={filtroMes === null ? "" : filtroMes.toString()}
              onChange={(e) => setFiltroMes(Number(e.target.value) || null)}
            >
              <option value="" className="text-xs/[12px]">
                TODOS
              </option>
              {moment.months().map((mes, index) => (
                <option
                  className="uppercase text-xs/[8PX]"
                  key={index}
                  value={(index + 1).toString()}
                >
                  {mes}
                </option>
              ))}
            </select>
          </label>
          <label className="text-xs/[12px] uppercase dark:bg-slate-900 dark:text-slate-50">
            Semana:
            <select
              className="text-slate-900 cursor-pointer dark:bg-slate-950 dark:text-slate-50"
              value={filtroSemana === null ? "" : filtroSemana.toString()}
              onChange={(e) => setFiltroSemana(Number(e.target.value) || null)}
            >
              <option className="text-xs/[12px]" value="">
                TODAS
              </option>
              {semanasDisponiveis().map((semana) => (
                <option
                  className="uppercase text-xs dark:bg-slate-900 dark:text-slate-50"
                  key={semana}
                  value={semana.toString()}
                >
                  Semana {semana - semanasDisponiveis()[0] + 1}
                </option>
              ))}
            </select>
          </label>
        </section>
        <button
          className="text-xs/[12px] flex items-center gap-2 uppercase dark:bg-slate-900 dark:text-slate-50"
          onClick={() => {
            setFiltroMes(null);
            setFiltroSemana(null);
          }}
        >
          <i className="bi bi-backspace-reverse-fill"></i>
          Limpar Filtros
        </button>
      </div>
      <h1 className="py-1 uppercase font-bold md: text-[14px] dark:text-slate-50">Proximos eventos</h1>
      <div className="h-[700px] overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {eventos
        ? eventos
            .filter(filterEvents)
            .map((evento) => ({
              ...evento,
              eventDateTime: moment(evento.Data + " " + evento.time), // Combina a data e o horário em um único objeto Moment
            }))
            .map((evento) => ({
              ...evento,
              timeDifference: evento.eventDateTime.diff(
                moment(),
                "milliseconds"
              ), // Calcula a diferença de tempo em relação à data atual
            }))
            .sort(
              (a, b) => Math.abs(a.timeDifference) - Math.abs(b.timeDifference)
            ) // Ordena os eventos pela diferença de tempo
            .map((evento) => (
              <section className="flex w-full items-center my-2 border-1 border-blue-500/10" key={evento.id}>
                <div className="bg-[#0c4d8d] text-slate-50 flex flex-col w-3/5 uppercase text-sm/[16px] font-bold py-1 px-3 gap-1 md:px-5 md:w-3/12">
                  <span
                    className=" border-b-2 border-slate-50 my-2 text-center text-[12px]"
                  >
                    {evento.eventDateTime.locale("pt-br").format("dddd")}
                  </span>
                  <span className=" border-slate-50 text-[12px]">{evento.eventDateTime.format("DD/MM/YYYY")}</span>
                  <span className=" border-slate-50 text-[12px]">{evento.eventDateTime.format("HH:mm")}</span>
                </div>
                <div className=" w-full flex flex-col items-center justify-center text-[12px] dark:text-slate-50 md:text-[8px]">
                  <span className="font-bold md:text-[16px]">{evento.eventName}</span>
                  <p className="text-red-500 text-[10px] text-center md:text-[14px]">{evento.eventDescription}</p>
                </div>
              </section>
            ))
        : null}
        </div>
    </div>
  );
}
