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
    <div className="min-h-screen flex flex-col justify-center items-center w-full box-border my-4">
         <button className=" flex absolute left-2 top-[1030px]">
        <a href="/">
          <i className="bi bi-arrow-left text-[20px] text-white"></i>
        </a>
      </button>
      <ul className=" w-full  lg:flex" >
        {events.map((event) => (
          <div className=" w-full dark:text-white" key={event.id}>
            <div className="w-50 m-auto border-2 p-2 rounded-lg shadow-md shadow-blue-500/50 flex flex-col gap-2">
              <h5 className="font-bold">
                {event.eventName.toLocaleUpperCase()}
              </h5>
              <div className="text-sm">
                <p>
                  {new Date(event.Data).toLocaleDateString()}
                </p>
                <p className="card-text">{event.eventDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
      <div className="w-4/5 h-[600px] my-28 mx-auto shadow-lg lg:w-2/5 lg:h-[800px]">
        <img
          src={CultoMocidae}
          alt=""
          className="w-full h-[600px]  rounded-xl lg:h-[800px]"
        />
      </div>
    </div>
  );
}
