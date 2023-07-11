import Arrow from "../../assets/arrow.svg"
import PropTypes from "prop-types"

function ContactItem({icon, title, description, linkText, link}) {
  return (
    <div className='w-[264px] flex flex-col items-center justify-center text-center'>
        <img src={icon} alt='icon'/>
        <h6 className='text-[#1e1e1e] my-4 font-medium text-2xl'> {title} </h6>
        <p className='text-[#1e1e1e] mb-3 '> {description} </p>
        <a className='flex items-center gap-x-2' href={link}>
        {linkText}
        <img src={Arrow} alt='arrow'/>
        </a>
    </div>
  )
}

ContactItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default ContactItem