export function BannerEspecial() {

  const handleWhatsAppClick = () => {
    // Substitua o número do WhatsApp abaixo pelo número desejado
    const phoneNumber = '4411969501159';
    // Construa a URL do WhatsApp com o número de telefone
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    // Redirecione para o WhatsApp
    window.location.href = whatsappURL;
  };


  return (
    <div className="relative w-full bg-red-500 text-white flex items-center py-2 px-4 font-bold text-lg cursor-pointer overflow-hidden" onClick={handleWhatsAppClick}>
    <span className="inline-block text-[10px] animate-moveRightToLeft w-full box-border lg:text-[14px] lg:tracking-[.3rem]">01-05 DIA DO PASTEL DA MISSÃO! CLIQUE E RESERVE O SEU  <i className="bi bi-whatsapp text-black"> </i></span>
  </div>
  );
}
