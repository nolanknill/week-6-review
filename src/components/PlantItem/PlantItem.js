/* TODO: Add link-like styling for our List Item */

const PlantItem = ({ id, name, changeSelectedPlant }) => {
    return (
        <li 
            className="plant-list__item"
            onClick={() => { changeSelectedPlant(id) }}>
                {name}
        </li>
    );

}

export default PlantItem;