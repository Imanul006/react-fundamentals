import PropTypes from 'prop-types';
function List(props) {

    let items = props.items.map(item => <li>{item}</li>);
    

    return (
        <>
            <h3>{props.title}</h3>
            <ul>
                {items}
            </ul>
        </>
    );
}

List.propTypes = {
    item: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

export default List;