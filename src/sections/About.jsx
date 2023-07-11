import Trabajadores from "../assets/trabajadores.jpg";
import VanguardistasIcon from "../assets/Vanguardistas.svg";
import ResponsabilidadIcon from "../assets/Responsabilidad.svg";
import ClientesIcon from "../assets/clientes.svg";

function About() {
  return (
    <div id="nosotros" className="mt-12 lg:flex lg:justify-end lg:flex-col lg:items-center">
      <div className="px-5 lg:max-w-[1244px] lg:px-0 lg:flex lg:justify-between lg:mb-8">
        <div className="lg:max-w-[700px] pl-4">
          <p className="text-gray-400 font-medium">Nosotros</p>
          <h2 className="font-semibold text-[#1E1E1E] text-2xl lg:text-4xl ">
            Compromiso, responsabilidad y honestidad es lo que nos distingue
          </h2>
        </div>
        <div className="lg:w-[550px] pr-4">
          <p className="text-gray-600 mt-4 mb-9 lg:mb-0 lg:mt-4">
            En DIMADE estamos seguros que los tiempos de entrega son
            primordiales para nuestros trabajos, así como la calidad de cada una
            de estos, en nuestra empresa contamos con personal capacitado, asi
            mismo estamos comprometidos en apoyar la economía de cada lugar y/o
            región.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img
          className="h-[210px] object-cover lg:w-[1244px] lg:h-auto"
          src={Trabajadores}
          alt="banner"
        />
      </div>

      <div className="px-5 text-center mt-16 lg:w-[600px] lg:mt-16 ">
        <h2 className="font-semibold text-[#1E1E1E] text-2xl lg:text-4xl">
          Garantizamos la satisfacción con nuestros clientes
        </h2>
        <p className="text-gray-700 mt-4 mb-14 lg:mb-0 lg:mt-4">
          Buscamos mano de obra y materiales que cumplan con la calidad para
          ejecutar cada uno de nuestros proyectos.
        </p>
      </div>

      <div className="flex flex-col gap-y-12 px-5 lg:max-w-[1440px] lg:px-0 lg:flex-row lg:justify-between lg:gap-x-8 lg:items-center lg:mt-12">
        <div className="flex flex-col items-center lg:max-w-[380px] ">
          <img className="w-[80px] " src={VanguardistasIcon} alt="icon" />
          <h3 className="text-[#1E1E1E] font-semibold text-2xl text-center">
            Somos vanguardistas en nuestros proyectos
          </h3>
          <p className="text-[#1E1E1E] text-center">
            Estamos comprometidos en la calidad, tiempo de entrega y
            acoplándonos a cada una de las necesidades de nuestros clientes.
          </p>
        </div>

        <div className="flex flex-col items-center lg:max-w-[380px]">
          <img className="w-[80px] " src={ResponsabilidadIcon} alt="icon" />
          <h3 className="text-[#1E1E1E] font-semibold text-2xl text-center">
            Responsabilidad y Compromiso con nuestros clientes
          </h3>
          <p className="text-[#1E1E1E] text-center">
            Es de suma importancia para nosotros la buena calidad y el buen
            servicio en cada uno de nuestros proyectos
          </p>
        </div>

        <div className="flex flex-col items-center lg:max-w-[380px]">
          <img className="w-[80px] " src={ClientesIcon} alt="icon" />
          <h3 className="text-[#1E1E1E] font-semibold text-2xl text-center">
            Relación con los clientes transparente
          </h3>
          <p className="text-[#1E1E1E] text-center">
            Nos comprometemos a brindar una comunicación clara y abierta, donde
            compartimos información relevante, detalles del proceso y cualquier
            actualización importante.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
