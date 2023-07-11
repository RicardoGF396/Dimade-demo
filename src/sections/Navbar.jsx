import Logo from "../assets/LogoDimade_PNG.png";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import BotonContacto from "../assets/BotonContacto.svg";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScreenBig = useMediaQuery({ minWidth: 1024 });
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isSticky = scrollPosition > 0;
      setIsSticky(isSticky);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div  className={`w-full relative z-50 ${isSticky ? "sticky top-0" : ""}`}>
      <nav
        className={`w-full p-6 flex items-center justify-between ${
          isSticky ? "bg-white shadow-lg" : ""
        }`}
      >
        <img className={`duration-100 ${ isSticky ? "w-[100px]" : "w-[180px]" }`} src={Logo} alt="logo dimade" />
        {!isScreenBig && (
          <img
            onClick={toggleMenu}
            className="cursor-pointer"
            src={Menu}
            alt="menu"
          />
        )}

        {isScreenBig && (
          <>
            <ul className="flex gap-x-9 flex-row">
              <a href="#">
                <li className="text-base font-medium">Inicio</li>
              </a>
              <a href="#nosotros">
                <li className="text-base font-medium">Nosotros</li>
              </a>
              <a href="#servicios">
                <li className="text-base font-medium">Servicios</li>
              </a>
              <a href="#proyectos">
                <li className="text-base font-medium">Proyectos</li>
              </a>
              <a href="#contacto">
                <li className="text-base font-medium">Contacto</li>
              </a>
            </ul>
            <a href="mailto:hola@dimade.com.mx">
              <img src={BotonContacto} alt="Contacto" />
            </a>
          </>
        )}
      </nav>

      <div
        className={`w-full h-screen bg-white flex absolute top-0 transition-all duration-500 ease-in-out ${
          isOpen ? "left-0" : "left-[-100%]"
        } `}
      >
        <img
          onClick={toggleMenu}
          className="absolute top-8 right-8 cursor-pointer"
          src={Close}
          alt="close"
        />
        <ul className="flex gap-y-9 flex-col pl-8 mt-24">
          <a onClick={toggleMenu} href="#">
            <li className="text-5xl">Inicio</li>
          </a>
          <a onClick={toggleMenu} href="#nosotros">
            <li className="text-5xl">Nosotros</li>
          </a>
          <a onClick={toggleMenu} href="#servicios">
            <li className="text-5xl">Servicios</li>
          </a>
          <a onClick={toggleMenu} href="#proyectos">
            <li className="text-5xl">Proyectos</li>
          </a>
          <a onClick={toggleMenu} href="#contacto">
            <li className="text-5xl">Contacto</li>
          </a>
          <p className="">
            <span className="font-medium">Contacto</span> <br />
            Hernando de Martel #63-A Col. La Luz C.P. 47420 Lagos de Moreno,
            Jal.
          </p>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
