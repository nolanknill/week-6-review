import PlantItem from "../PlantItem/PlantItem";
import "./PlantList.scss";
import { Link } from "react-router-dom";

const PlantList = ({ plants }) => {
    return (
        <nav className="plant-list">
            <ul className="plant-list__list">
                <li className="plant-list__item">
                    <Link className="plant-list__link" to="/">Home</Link>
                </li>
                {plants.map((plant) => {
                    return <PlantItem
                        key={plant.id}
                        id={plant.id}
                        name={plant.name}
                    />
                })}
            </ul>
        </nav>
    );
}

export default PlantList;