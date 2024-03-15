import { EventosType } from "../../types";
import style from "./quadroAvisos.module.css";
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

  console.log(eventos);

  return (
    <div className={style["container-proximos-eventos"]}>
      <div className={style["container-filtered"]}>
        <section>
          <label>
            <i className="bi bi-filter-right"></i>
            Mês:
            <select
              value={filtroMes === null ? "" : filtroMes.toString()}
              onChange={(e) => setFiltroMes(Number(e.target.value) || null)}
            >
              <option value="">Todos</option>
              {moment.months().map((mes, index) => (
                <option key={index} value={(index + 1).toString()}>
                  {mes}
                </option>
              ))}
            </select>
          </label>
          <label>
            <i className="bi bi-filter-right"></i>
            Semana:
            <select
              value={filtroSemana === null ? "" : filtroSemana.toString()}
              onChange={(e) => setFiltroSemana(Number(e.target.value) || null)}
            >
              <option value="">Todas</option>
              {semanasDisponiveis().map((semana) => (
                <option key={semana} value={semana.toString()}>
                  Semana {semana - semanasDisponiveis()[0] + 1}
                </option>
              ))}
            </select>
          </label>
        </section>
        <button
          className={style["btn-filter"]}
          onClick={() => {
            setFiltroMes(null);
            setFiltroSemana(null);
          }}
        >
          <i className="bi bi-backspace-reverse-fill"></i>
          Limpar Filtros
        </button>
      </div>
      <h1 className={style["title-proximos-eventos"]}>Proximos eventos</h1>
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
              <section
                className={style["section-promximo-evento"]}
                key={evento.id}
              >
                <div className={style["card-date"]}>
                  <span
                    style={{
                      borderBottom: " solid 2px #fff",
                      textAlign: "center",
                      margin: "10px 0",
                    }}
                  >
                    {evento.eventDateTime.locale("pt-br").format("dddd")}
                  </span>
                  <span>{evento.eventDateTime.format("DD/MM/YYYY")}</span>
                  <span>{evento.eventDateTime.format("HH:mm:ss")}</span>
                </div>
                <div className={style["card-description"]}>
                  <span className={style["event-name"]}>
                    {evento.eventName}
                  </span>
                  <p className={style["description-proximo-evento"]}>
                    {evento.eventDescription}
                  </p>
                </div>
              </section>
            ))
        : null}
    </div>
  );
}
