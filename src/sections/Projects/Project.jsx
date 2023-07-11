import PropTypes from "prop-types";

function Project({img}) {
  return (
    <div>
        <img className="px-4" src={img} alt="image" />
    </div>
  ) 
}

Project.propTypes = {
    img: PropTypes.string.isRequired,
}

export default Project