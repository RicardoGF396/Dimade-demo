import PropTypes from "prop-types";

function ListItem({ title }) {
  return <div className="flex items-center gap-x-2">
    <div className="w-4 h-4 bg-[#1e1e1e]"></div>
    <p> {title} </p>
  </div>;
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ListItem;
