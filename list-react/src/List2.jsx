import PropTypes from 'prop-types';

function List(props) {
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map(item => 
    <li key={item.id}>
      {item.name}: &nbsp;  {/* Changed from fruit.name to item.name */}
      <b>{item.calories}</b>
    </li>
  );

  return (
    <>
      <h3 className="category">{category}</h3>
      <ol className="listitems">{listItems}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,        // Changed propTypes.number to PropTypes.number (fixed capitalization)
      name: PropTypes.string.isRequired,      // Changed propTypes.string to PropTypes.string (fixed capitalization)
      calories: PropTypes.number.isRequired,  // Changed propTypes.number to PropTypes.number (fixed capitalization)
    })
  ).isRequired, // Closed the PropTypes.arrayOf definition correctly and added .isRequired
};

List.defaultProps = {
  category: "category",
  items: [],
};

export default List;
