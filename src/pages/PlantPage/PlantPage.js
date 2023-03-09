import PlantList from "../../components/PlantList/PlantList";
import SelectedPlant from "../../components/SelectedPlant/SelectedPlant";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getPlantsEndpoint } from "../../utils/api-utils";

function PlantPage() {
    const [plants, setPlants] = useState([]);
    const params = useParams();
    
    useEffect(() => {
        axios
            .get(getPlantsEndpoint())
            .then(response => {
                setPlants(response.data);
            });
    }, []);

    if (plants.length === 0) {
        return <h1>Loading...</h1>
    }

    const selectedPlantId = params.plantId || plants[0].id;

    // Create a new array without the selected plant
    const filteredPlants = plants.filter((plant) => {
        return plant.id !== selectedPlantId;
    })

    return (
        <div className="app">
            <PlantList plants={filteredPlants} />
            <SelectedPlant id={selectedPlantId} />
        </div>
    );
}

export default PlantPage;