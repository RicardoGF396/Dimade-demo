import PropTypes from "prop-types"


function ProjectItem({description}) {
  return (
    <div className="pb-4 border-b border-gray-300">
        {description}
    </div>
  )
}

ProjectItem.propTypes = {
    description: PropTypes.string.isRequired,
}

export default ProjectItem