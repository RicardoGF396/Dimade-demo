import Project from "./Project";
import Drenaje from "../../assets/imgDrenaje.svg";
import Valvula from "../../assets/imgValvula.svg";
import Filtracion from "../../assets/imgFiltraciones.svg";
import Acero from "../../assets/imgAcero.svg";
import Rancho from "../../assets/imgRancho.svg";
import Cisterna from "../../assets/imgCisterna.svg";
import ArrowLeft from "../../assets/arrowLeft.svg";
import ArrowRight from "../../assets/arrowRight.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import ProjectItem from "./ProjectItem";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Projects() {
  const isScreenBig = useMediaQuery({ minWidth: 425 });

  return (
    <div
      id="proyectos"
      className="mt-[96px] px-5 xl:px-10 w-full flex justify-center items-center overflow-hidden"
    >
      <div className="max-w-[1440px]">
        <p className="mx-5 text-gray-400 font-medium">Proyectos</p>
        <h2 className="mx-5 font-semibold text-[#1E1E1E] text-3xl lg:text-4xl mb-8">
          Construyendo un Futuro Sólido
        </h2>

        {isScreenBig ? (
          <div className="flex items-center">
            <div className="w-full">
              <Carousel
                showThumbs={true}
                showArrows={true}
                infiniteLoop={true}
                centerMode={true}
                draggable={true}
                showStatus={false}
                centerSlidePercentage={33.33}
                swipeable={true} // Habilitar desplazamiento con el mouse
              >
                <Project img={Drenaje} />
                <Project img={Filtracion} />
                <Project img={Acero} />
                <Project img={Rancho} />
                <Project img={Valvula} />
                <Project img={Cisterna} />
              </Carousel>
            </div>
          </div>
        ) : (
          <div className="w-screen overflow-hidden">
            <Slider
              dots={true}
              arrows={true}
              infinite={true}
              slidesToShow={1}
              centerMode={true}
              draggable={true}
            >
              <Project img={Drenaje} />
              <Project img={Filtracion} />
              <Project img={Acero} />
              <Project img={Rancho} />
              <Project img={Valvula} />
              <Project img={Cisterna} />
            </Slider>
          </div>
        )}

        <div className="mt-14 flex flex-col gap-y-6 px-5 lg:px-5">
          <ProjectItem description="Sistema de tierras en PROAM AMARA" />
          <ProjectItem description="Arreglo Mecanico de distribucion en El Nogal. Ocotlan, Jalisco." />
          <ProjectItem description="Conexión Eléctrica en Rectificador, en Lagos de Moreno, Jalisco." />
          <ProjectItem description="Carga y Descarga de Tubería de Acero de 12”, en Lagos de Moreno, Jalisco." />
          <ProjectItem description="Colocación de riego Premezclado en Santa fe II, en Puerto Interior, Guanajuato." />
          <ProjectItem description="Mantenimiento y/o rehabilitación de derecho de vía (deshierbe) en los tramos carreteros San Juan de los Lagos-Lagos de Moreno (km 146+000 al 118+000) y León- Encarnación de Diaz (km 48+000 al 63+000)" />
          <ProjectItem description="Empedrado en las calles: 16 de septiembre entre las calles Lima y Alfredo Padilla, calle Felipe Ángeles entre las calles 14 de agosto a la calle 16 de septiembre y calle Alfredo Padilla entre las calles Swissmex a la calle María Dolores Cervantes en la col. Las Huertitas." />
          <ProjectItem description="Empedrado ahogado en concreto en las calles: Porvenir de Pedro Moreno a Plaza Simón Celedón; calles perimetrales a la Plaza Simón Celedón (frente al templo) y calle Privada Mariano Azuela de Plaza Simón Celedón a la campana en la comunidad de san Miguel Buenavista." />
          <ProjectItem description="Drenaje sanitario en la comunidad de las Crucitas." />
          <ProjectItem description="Proyecto de red de agua potable en Lic. Francisco Primo de Verdad y Ramos." />
          <ProjectItem description="Construcción de red de drenaje en la comunidad de el Tepetate." />
          <ProjectItem description="Planta de tratamiento de aguas residuales en la comunidad de el Tepetate." />
          <ProjectItem description="Reconstrucción de tramo de colector de 42 pulgadas en el Rio Lagos." />
          <ProjectItem description="Construcción de cancha de usos múltiples en la colonia Cañada de Ricos." />
          <ProjectItem description="Elaboración del Proyecto Ejecutivo del Camino tipo “C” del entronque de la Carretera León-San Felipe, a la Comunidad de Comanja de Corona, con una longitud de 10 km." />
          <ProjectItem description="Electrificación Ampliación de Red Eléctrica para Viviendas en la Comunidad de Llano de Miranda." />
        </div>
      </div>
    </div>
  );
}

export default Projects;
