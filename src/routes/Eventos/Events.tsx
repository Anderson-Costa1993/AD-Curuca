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

  const filteredEvents = events.filter((event) => event.eventType === "Evento");

  return (
    <div className={style["container-events"]}>
      <button className={style["buttom-return"]}>
        <a href="/">
          <i
            className="bi bi-arrow-left"
            style={{ fontSize: "20px", color: "#0C4D8D" }}
          ></i>
        </a>
      </button>
      <ul>
        {filteredEvents.map((event) => (
          <div className={style["iten-list"]}>
            <li key={event.id}>
              {" "}
              {/* Renderizar outros detalhes do evento aqui */}
              <div className={style.card}>
                <div className="card-body">
                  <h5
                    className="card-title fw-bold"
                    style={{ color: "#0C4D8D" }}
                  >
                    {event.eventName}
                  </h5>
                  <p className="card-text">{event.eventDescription}</p>
                  <span>{new Date(event.Data).toLocaleDateString()}</span>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
