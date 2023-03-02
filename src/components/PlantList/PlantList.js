import PlantItem from "../PlantItem/PlantItem";
import "./PlantList.scss";

const PlantList = ({ changeSelectedPlant, plants }) => {
    return (
        <nav className="plant-list">
            <ul className="plant-list__list">
                <li className="plant-list__item">Home</li>
                {plants.map((plant) => {
                    return <PlantItem
                        key={plant.id}
                        id={plant.id}
                        name={plant.name}
                        changeSelectedPlant={changeSelectedPlant}
                    />
                })}
            </ul>
        </nav>
    );
}

export default PlantList;