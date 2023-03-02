import plants from "./data/plants.json";
import PlantList from "./components/PlantList/PlantList";
import { useState } from "react";

function App() {
  const [selectedPlant, setSelectedPlant] = useState(plants[0]);

  const changeSelectedPlant = (id) => {    
    // TODO: Use the id argument to set the new selectedPlant
    const foundPlant = plants.find((plant) => {
      if (plant.id === id) {
        return true;
      } else {
        return false;
      }
    })

    setSelectedPlant(foundPlant);
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
