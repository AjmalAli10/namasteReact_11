import "../styles/RestuarantCard.css";
import config from "../config";
const RestuarantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString, avgRating}) =>{
    return(
        <div className="card">
            <img src={config.IMG_CDN_LINK+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            {
                avgRating < "4.0" ? <span className="yelloRating">*{avgRating}</span> : <span className="greeenRating">*{avgRating}</span>
            }
        </div>
    )
};
export default RestuarantCard;