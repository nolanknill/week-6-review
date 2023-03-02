import plants from "./data/plants.json";
import PlantList from "./components/PlantList/PlantList";

function App() {
  const changeSelectedPlant = (id) => {
    // TODO: Remove the selected plant with this id from the list
    // TODO:  set the new selected plant to the plant with matching id
    
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
