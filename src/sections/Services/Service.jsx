import PropTypes from "prop-types";

function Service({title, description}) {
  return (
    <div className="border-b border-gray-400 pb-4">
        <h4 className="font-medium text-[#1e1e1e] text-2xl "> {title} </h4>
        <p className="text-gray-600"> {description} </p>
    </div>
  )
}

Service.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

export default Service