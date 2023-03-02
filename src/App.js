import plants from "./data/plants.json";
import PlantList from "./components/PlantList/PlantList";

function App() {
  const changeSelectedPlant = (id) => {
    alert(id);
  }

  return (
    <PlantList 
      changeSelectedPlant={changeSelectedPlant}
      plants={plants}
    />
  );
}

export default App;
