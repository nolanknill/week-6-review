import "./SelectedPlant.scss";
import axios from "axios";
import { getPlantEndpoint } from "../../utils/api-utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SelectedPlant = ({ id }) => {
    const [selectedPlant, setSelectedPlant] = useState(null);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        axios
            .get(getPlantEndpoint(id))
            .then(response => {
                setSelectedPlant(response.data);
                setFetchError(false);
            })
            .catch(error => {
                setFetchError(error.response.data.message);
            })
    }, [id]);


    if (fetchError) {
        return (
            <main>
                <p>Unable to handle request. Error message: {fetchError}</p>
                <Link to="/">Go back to home page</Link>
            </main>
        );
    }

    if (selectedPlant === null) {
        return <h1>Loading...</h1>
    }
    
    return (
        <main className="selected-plant">
            <h1>{selectedPlant.name}</h1>
            <img className="selected-plant__image" src={selectedPlant.image_url} alt={`${selectedPlant.name} the ${selectedPlant.type}`} />
            <p>{selectedPlant.type}</p>
            <p>This plant should be watered every {selectedPlant.water_frequency} days</p>
        </main>
    )
}


export default SelectedPlant;