import ContactItem from "./ContactItem";
import MapIcon from "../../assets/mapIcon.svg";
import MailIcon from "../../assets/mailIcon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const sendEmail = (event) => {
    event.preventDefault();
    toast.success('📧 Email enviado con éxito', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

      emailjs.sendForm('service_v8du69c', 'template_28cyigg', event.target, 'eXY0fFyJiYtUqyzav');
  };

  return (
    <div id="contacto" className="mt-[96px] lg:px-5 w-full flex flex-col justify-center items-center ">
      <div className="w-full lg:max-w-[1440px]">
        <p className="mx-5 text-gray-400 font-medium">Contacto</p>
        <h2 className="mx-5 font-semibold text-[#1E1E1E] text-3xl lg:text-4xl mb-8">
          Estaremos encantados de poder trabajar contigo
        </h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3715.7246281919415!2d-101.92868668506176!3d21.361354385819237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDIxJzQwLjkiTiAxMDHCsDU1JzM1LjQiVw!5e0!3m2!1ses-419!2smx!4v1685579900352!5m2!1ses-419!2smx"
        width="100%"
        height="450"
        style={{ border: "0", padding: "0" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="w-full lg:max-w-[1440px] mt-12 flex flex-col gap-y-12 justify-center items-center lg:flex-row lg:justify-between">
        <div className=" w-full flex flex-col lg:flex-row lg:gap-x-16 lg:items-center">
          <div className="px-4">
            <h2 className="font-semibold text-[#1E1E1E] text-2xl lg:text-3xl mb-8 lg:w-[572px]">
              Envíanos mensaje y nos pondremos en contacto contigo
            </h2>
            <form onSubmit={sendEmail}>
              <input
                name="subject"
                type="text"
                required
                placeholder="Asunto"
                className="border mb-4 border-gray-400 w-full px-6 py-4 rounded-lg "
              />
              <input
                name="name"
                type="text"
                required
                placeholder="Nombre completo"
                className="border mb-4 border-gray-400 w-full px-6 py-4 rounded-lg "
              />
              <input
                name="phone"
                type="text"
                required
                placeholder="Teléfono o correo electrónico"
                className="border mb-4 border-gray-400 w-full px-6 py-4 rounded-lg "
              />
              <textarea
                name="message"
                type="text"
                required
                placeholder="Descripción..."
                className="border resize-none mb-4 h-[180px] border-gray-400 w-full px-6 py-4 rounded-lg "
              />
              <button className="w-full bg-black text-white rounded-lg py-4 font-medium">
                Enviar
              </button>
              <ToastContainer/>
            </form>
          </div>
          <div className="flex w-full justify-center items-center gap-y-6 mt-12 lg:mt-0  flex-col xl:flex-row gap-x-6 lg:items-start">
            <ContactItem
              icon={MapIcon}
              title="Dirección"
              description="Hernando de Martel #63-A Col. La Luz C.P. 47420 Lagos de Moreno Jal."
              linkText="Ir a mapa"
              link="https://goo.gl/maps/FZQKJth8SUvyDprZ8"
            />

            <ContactItem
              icon={MailIcon}
              title="Correo electrónico"
              description="hola@dimade.com.mx"
              linkText="Email"
              link="mailto:hola@dimade.com.mx"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
