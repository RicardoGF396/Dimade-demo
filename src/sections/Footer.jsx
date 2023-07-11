import Logo from "../assets/LogoDimade_PNG.png"

function Footer() {
  return (
    <div className="mt-[96px] px-5 w-full flex flex-col justify-center items-center ">
      <div className="w-full lg:max-w-[1440px] lg:px-5">
      <div className="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
        <div className="lg:w-[316px] flex flex-col gap-y-4 ">
        <img className="w-[200px] lg:w-auto mb-4" src={Logo} alt="logo" />
        <p>DIMADE es una empresa 100% Mexicana, dedicada a la Industria de la Construcción en obra privada y publica.</p>
        <div style={{border: "1px solid #BDBDBD", maxWidth: 443}}></div>
        <p className="text-gray-500">Hernando de Martel #63-A Col. La Luz C.P. 47420 Lagos de Moreno Jal.</p>
        </div>
        <div>
          <p className="font-medium">Contacto</p>

          <p>hola@dimade.com.mx<br /></p><br/>
          <p>Juan Eduardo Macías Torres<br />emacias@dimade.com.mx</p><br/>
          <p>Monica González<br />mgonzalez@diamde.com.mx</p><br/>
          <p>Julio César Delgado Martínez<br />jdelgado@dimade.com.mx</p>
        </div>
      </div>

      <div className="lg:text-center my-12">
        <p>Copyright © 2023 Dimade. Todos los derechos reservados</p>
      </div>
      </div>
    </div>
  )
}

export default Footer