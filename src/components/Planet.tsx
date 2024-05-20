import PlanetType from "../models/planetType";
import "../styles/componentsStyles/planet.css";

type planetProps = {
    planet : PlanetType
}

function Planet ({ planet } : planetProps ) {
    return (
        <section >
            <p className="planet" style={{ backgroundColor: planet.color, width: planet.size * 10 + 'px', height: planet.size * 10 + 'px' }}></p>
        </section>
    )
}

export default Planet;