import { Carousel } from "../../Componentes/Carouseu/Carouseu";
import { QuadroAvisos } from "../../Componentes/QuadroAvisos/QuardroAvisos";


export function HomePage() {
  return (
    <div className='min-h-screen w-full'>
      <section className='flex flex-col justify-center items-center w-full gap-16  min-h-screen]'>
        <div className='w-[96%] mt-8 md:w-3/5'>
          <QuadroAvisos />
        </div>
        <div className="w-4/5 md:w-2/6">
          <Carousel />
        </div>
      </section>
      <div className="flex flex-col items-center gap-4 mx-auto my-40 md:w-[1280px]">
        <h1 className="text-zink-900 uppercase dark:text-slate-50">Nossa Localização</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.2414211474064!2d-46.402080930418734!3d-23.56967589867462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce659d782de4cf%3A0x9f98bc5fa63884f!2sR.%20Cachoeira%20Camale%C3%A3o%2C%2090%20-%20Conj.%20Hab.%20Inacio%20Monteiro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008472-150!5e0!3m2!1spt-BR!2sbr!4v1705971926176!5m2!1spt-BR!2sbr"
          width="90%"
          height="300"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
