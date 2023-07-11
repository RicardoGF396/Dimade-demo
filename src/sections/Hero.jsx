import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dimade1 from  "../assets/Dimade1.jpg";
import Dimade2 from "../assets/Dimade2.jpg";
import Dimade3 from "../assets/Dimade3.jpg";
import Dimade4 from "../assets/Dimade4.jpg";
import Dimade5 from "../assets/Dimade5.jpg";
import Dimade6 from "../assets/Dimade6.jpg";
import Dimade7 from "../assets/Dimade7.jpg";
import Dimade8 from "../assets/Dimade8.jpg";
import Dimade9 from "../assets/Dimade9.jpg";

function Hero() {
  const isScreenBig = useMediaQuery({ minWidth: 1024 });

  /*const slides = [
    <img className="p-4" src={Tepatitlan} key={1} />,
    <img className="p-4" src={Lagos} key={2} />,
    <img className="p-4" src={Gto} key={3} />,
    <img className="p-4" src={Zapotanejo} key={4} />,
    <img className="p-4" src={Bachoco} key={5} />,
  ];*/

  const bannersDesktop = [
    <img src={Dimade1} className="w-full h-[110vh] object-cover " alt="image" key={1} />,
    <img src={Dimade2} className="w-full h-[110vh] object-cover " alt="image" key={2} />,
    <img src={Dimade3} className="w-full h-[110vh] object-cover " alt="image" key={3} />,
    <img src={Dimade4} className="w-full h-[110vh] object-cover " alt="image" key={4} />,
    <img src={Dimade5} className="w-full h-[110vh] object-cover " alt="image" key={5} />,
    <img src={Dimade6} className="w-full h-[110vh] object-cover " alt="image" key={6} />,
    <img src={Dimade7} className="w-full h-[110vh] object-cover " alt="image" key={7} />,
    <img src={Dimade8} className="w-full h-[110vh] object-cover " alt="image" key={8} />,
    <img src={Dimade9} className="w-full h-[110vh] object-cover " alt="image" key={9} />,
  ]

  const bannersMobile = [
    <img src={Dimade1} className="h-[50vh] object-cover" alt="image" key={1} />,
    <img src={Dimade2} className="h-[50vh] object-cover" alt="image" key={2} />,
    <img src={Dimade3} className="h-[50vh] object-cover" alt="image" key={3} />,
    <img src={Dimade4} className="h-[50vh] object-cover" alt="image" key={4} />,
    <img src={Dimade5} className="h-[50vh] object-cover" alt="image" key={5} />,
    <img src={Dimade6} className="h-[50vh] object-cover" alt="image" key={6} />,
    <img src={Dimade7} className="h-[50vh] object-cover" alt="image" key={7} />,
    <img src={Dimade8} className="h-[50vh] object-cover" alt="image" key={8} />,
    <img src={Dimade9} className="h-[50vh] object-cover" alt="image" key={9} />,
    
  ]

  return (
    <div id="#">
      <div className="w-full flex justify-center items-center flex-col lg:flex-row-reverse">
        
        <div>
          {isScreenBig ? (
            <div className=" w-[50vw] h-[110vh] lg:-mt-[240px] overflow-hidden">
              <Slider
                infinite={true}
                slidesToScroll={1}
                slidesToShow={1}
                autoplay={true}
                autoplaySpeed={2000}
              >
                {bannersDesktop.map((banner) => banner)}
              </Slider>
            </div>
          ) : (
            <div className="w-[100vw] h-[50vh] overflow-hidden border">
              <Slider
                infinite={true}
                slidesToScroll={1}
                slidesToShow={1}
                autoplay={true}
                autoplaySpeed={2000}
                dots={true}
              >
                {bannersMobile.map((banner) => banner)}
              </Slider>
            </div>
          )}
        </div>
            {/* Título */}
        <div className="mt-8 px-6  lg:flex lg:justify-center lg:w-[50vw] lg:h-[90vh]  lg:items-center">
          <div className="lg:w-[524px] lg:-mt-32">
            <h1 className="font-semibold text-4xl lg:text-6xl">
              Construyendo juntos, forjando un futuro sólido.
            </h1>
            <p className="my-6">
              DIMADE es una empresa 100% Mexicana, dedicada a la Industria de la
              Construcción en obra privada y publica.
            </p>
            <a
              href="#contacto"
              className="font-medium text-white bg-[#1e1e1e] px-8 py-4 mt-4"
            >
              Contáctanos por email
            </a>
          </div>
        </div>

      </div>
      {/* Empresas */}
      {/* {isScreenBig ? (
        <div className="flex flex-row justify-center mt-12">
          <div className="w-[80%] flex items-center justify-between">
            <img src={Tepatitlan} alt="tepatitlan morelos" />
            <img src={Lagos} alt="Lagos" />
            <img src={Gto} alt="Guanajuato" />
            <img src={Zapotanejo} alt="Zapotanejo" />
            <img src={Bachoco} alt="Bachoco" />
          </div>
        </div>
      ) : (
        <div className="mt-12 w-full overflow-x-hidden">
          <Slider
            dots={true}
            infinite={true}
            slidesToShow={2}
            slidesToScroll={1}
            autoplay={true}
            speed={2000}
            autoplaySpeed={2000}
            cssEase="linear"
            className="gap-x-4"
          >
            {slides.map((slide) => slide)}
          </Slider>
        </div>
      )} */}
    </div>
  );
}

export default Hero;
