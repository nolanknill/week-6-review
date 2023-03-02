import "./SelectedPlant.scss";

const SelectedPlant = ({ 
    name,
    type, 
    imageUrl, 
    waterFrequency 
}) => {
    return (
        <main className="selected-plant">
            <h1>{name}</h1>
            <img className="selected-plant__image" src={imageUrl} alt={`${name} the ${type}`} />
            <p>{type}</p>
            <p>This plant should be watered every {waterFrequency} days</p>
        </main>
    );
}

export default SelectedPlant;