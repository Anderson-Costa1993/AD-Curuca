import { useEffect, useState } from "react";
import style from "./events.module.css";
import { EventosType } from "../../types";
import { supabase } from "../../supabaseConfig";
import CultoMocidae from "../../assets/cultoMocidade.jpg";

export function EventsPage() {
  const [events, setEvents] = useState<EventosType[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase
        .from("Events")
        .select()
        .eq("Data", new Date().toISOString().substr(0, 10)); // Filtra pela data atual
      setEvents(data || []);
    };

    fetchEvents();
  }, []);

  console.log(events);

  return (
    <div className="min-h-screen">
      <button className={style["buttom-return"]}>
        <a href="/">
          <i className="bi bi-arrow-left"></i>
        </a>
      </button>
      <ul>
        {events.map((event) => (
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
      <div className="w-2/5 h-[800px] my-28 mx-auto shadow-lg">
        <img
          src={CultoMocidae}
          alt=""
          className="w-full h-[800px]  rounded-xl"
        />
      </div>
    </div>
  );
}
