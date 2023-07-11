import Service from "./Service";
import Construyendo from "../../assets/construyendo.png";
import ListItem from "./ListItem";

function Services() {
  return (
    <div id="servicios" className="px-5 mt-[96px] w-full flex justify-center items-center">
      <div className="max-w-[1440px]">
        <p className="text-gray-400 font-medium">Servicios</p>
        <h2 className="font-semibold text-[#1E1E1E] text-3xl lg:text-4xl mb-8">
          Construyendo un Futuro Sólido
        </h2>
        <div className="lg:flex lg:gap-x-12">
          <div className="flex flex-col gap-y-8">
            <Service
              title="Proyectos Ejecutivos"
              description="Creamos proyectos ejecutivos personalizados para satisfacer tus necesidades y requerimientos específicos."
            />
            <Service
              title="Director Responsable de Obra (DRO)"
              description="Contamos con profesionales certificados para garantizar la supervisión y cumplimiento de las normativas en cada obra."
            />
            <Service
              title="Calculo Estructural"
              description="Realizamos cálculos estructurales precisos para asegurar la estabilidad y seguridad de tus construcciones."
            />
            <Service
              title="Dictamen de Seguridad Estructural"
              description="Ofrecemos servicios de evaluación y dictamen de seguridad estructural para edificios y estructuras existentes."
            />
            <Service
              title="Auditoría en Obra Pública"
              description="Realizamos auditorías exhaustivas para asegurar la correcta ejecución y administración de proyectos de obra pública."
            />
          </div>
          <div className="flex flex-col gap-y-8 mt-8 lg:mt-0">
            <Service
              title="Topografía"
              description="Proporcionamos servicios de topografía, incluyendo coordenadas UTM, lotificación, subdivisión y mediciones precisas."
            />
            <Service
              title="Diseño y Construcción de Cocinas Integrales"
              description="Creamos cocinas integrales funcionales y estéticamente atractivas, diseñadas según tus preferencias y necesidades."
            />
            <Service
              title="Precios Unitarios"
              description="Elaboramos presupuestos detallados con precios unitarios para una planificación precisa de tus proyectos."
            />
            <Service
              title="Asesoría en Obra Pública"
              description="Brindamos asesoría en licitaciones, conformación de expedientes, proyectos y presupuestos relacionados con obra pública."
            />
          </div>
        </div>

        {/* Otros servicios */}
        <div className="mt-12 lg:grid lg:grid-cols-2 lg:mt-16 gap-x-4">
          <div className="flex w-full justify-center ">
            <img className="lg:w-[600px] object-cover " src={Construyendo} alt="construyendo" />
          </div>
          <div>
            <h2 className="font-semibold text-[#1E1E1E] text-3xl lg:text-4xl mt-6 lg:w-[475px] ">
              Además contamos con otros servicios
            </h2>
            <p className="text-gray-700 mt-2 lg:w-[550px] ">
              {" "}
              La calidad, el compromiso y la innovación se unen para crear obras
              excepcionales.{" "}
            </p>

            <div className="lg:flex lg:justify-between">
              <div className="mt-8">
                <p className="font-medium text-2xl text-[#1e1e1e] mb-3">
                  Obra cívica y mecánica
                </p>
                <div className="flex flex-col gap-y-2">
                  <ListItem title="Construcción de Gasoducto" />
                  <ListItem title="Construcción de City Gate" />
                  <ListItem title="Cimentaciones" />
                  <ListItem title="Estructuras de Concreto y Acero" />
                  <ListItem title="Acabados" />
                  <ListItem title="Edificaciones Residenciales" />
                  <ListItem title="Herrería" />
                  <ListItem title="Impermeabilizaciones" />
                  <ListItem title="Infraestructura urbana" />
                  <ListItem title="Señalización" />
                  <ListItem title="Cunetas" />
                  <ListItem title="Deshierbe" />
                </div>
              </div>

              <div className="mt-8">
                <p className="font-medium text-2xl text-[#1e1e1e] mb-3">
                  Obra pública
                </p>
                <div className="flex flex-col gap-y-2">
                  <ListItem title="Líneas de agua" />
                  <ListItem title="Colectores sanitarios" />
                  <ListItem title="Empedrado Ahogado en concreto" />
                  <ListItem title="Supervisión de Obra" />
                  <ListItem title="Asfaltado" />
                  <ListItem title="Concreto hidráulico" />
                  <ListItem title="Canchas de usos múltiples" />
                  <ListItem title="Mantenimiento" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
