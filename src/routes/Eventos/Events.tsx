import { useEffect, useState } from "react";
import style from "./events.module.css";
import { EventosType } from "../../types";
import { supabase } from "../../supabaseConfig";

export function EventsPage() {
  const [events, setEvents] = useState<EventosType[]>([]);

  const dados = async () => {
    const { data } = await supabase.from("Events").select();
    setEvents(data || []);
  };

  useEffect(() => {
    dados();
  }, []);

  const currentDate = new Date();

// Filtra os eventos para encontrar apenas os eventos do tipo "Evento" e com data posterior à atual
const filteredEvents = events.filter((event) => {
    // Obtém a data do evento
    const eventDate = new Date(event.Data);
    // Retorna verdadeiro se a data do evento for posterior à data atual
    return event.eventType === "Evento" && eventDate > currentDate;
});

  return (
    <div className={style["container-events"]}>
      <button className={style["buttom-return"]}>
        <a href="/">
          <i className="bi bi-arrow-left"></i>
        </a>
      </button>
      <ul>
        {filteredEvents.map((event) => (
          <div className={style["iten-list"]} key={event.id}>
            <div className="card w-100">
              <h5 className="card-header">
                {event.eventName.toLocaleUpperCase()}
              </h5>
              <div className="card-body">
                <h5 className="card-title">
                  {new Date(event.Data).toLocaleDateString()}
                </h5>
                <p className="card-text">{event.eventDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
