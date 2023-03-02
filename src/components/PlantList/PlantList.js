import PlantItem from "../PlantItem/PlantItem";

const PlantList = ({ changeSelectedPlant, plants }) => {
    return (
        <nav>
            <ul>
                <li>Home</li>
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