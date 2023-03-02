import plants from "./data/plants.json";
import PlantList from "./components/PlantList/PlantList";
import SelectedPlant from "./components/SelectedPlant/SelectedPlant";
import { useState } from "react";
import "./App.scss";

function App() {
  const [selectedPlant, setSelectedPlant] = useState(plants[0]);

  const changeSelectedPlant = (id) => {    
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
    <div className="app">
      <PlantList 
        changeSelectedPlant={changeSelectedPlant}
        plants={filteredPlants}
      />
      <SelectedPlant 
        name={selectedPlant.name}
        type={selectedPlant.type}
        imageUrl={selectedPlant.image_url}
        waterFrequency={selectedPlant.water_frequency}
      />
    </div>
  );
}

export default App;
