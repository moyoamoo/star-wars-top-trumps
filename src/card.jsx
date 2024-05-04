import { useSelector } from "react-redux";
import { selectStarship } from "./redux/cardSlice";


const Card = () => {
    const starship = useSelector(selectStarship)
    return ( <>
    {starship && <div>
        <img src={`../src/assets/starships/${starship.imageUrlId}.jpg`}/>
        <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
        <p>Max Speed: {starship.max_atmosphering_speed}</p>
        </div>}
    </> );
}
 
export default Card;