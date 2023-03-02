import plants from "./data/plants.json";
import PlantList from "./components/PlantList/PlantList";
import { useState } from "react";

function App() {
  const [selectedPlant, setSelectedPlant] = useState(plants[0]);

  const changeSelectedPlant = (id) => {
    // TODO: Remove the selected plant with this id from the list
    // TODO:  set the new selected plant to the plant with matching id
    
    alert(id);
  }

  // Create a new array without the selected plant
  const filteredPlants = plants.filter((plant) => {
    return plant.id !== selectedPlant.id;
  })

  return (
    <PlantList 
      changeSelectedPlant={changeSelectedPlant}
      plants={filteredPlants}
    />
  );
}

export default App;
