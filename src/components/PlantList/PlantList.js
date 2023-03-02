const PlantList = ({ changeSelectedPlant, plants }) => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                {plants.map((plant) => {
                    return <li key={plant.id}>{plant.name}</li>
                })}
            </ul>
        </nav>
    );


}

export default PlantList;