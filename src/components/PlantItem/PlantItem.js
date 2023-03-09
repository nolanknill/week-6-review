import { Link } from "react-router-dom";

const PlantItem = ({ id, name }) => {
    return (
        <li className="plant-list__item">
            <Link className="plant-list__link" to={`/plants/${id}`}>{name}</Link>
        </li>
    );

}

export default PlantItem;