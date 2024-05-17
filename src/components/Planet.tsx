import PlanetType from "../models/planetType";

type planetProps = {
    planet : PlanetType
}

function Planet ({ planet } : planetProps ) {
    return (
        <>
        <p style={{ backgroundColor: planet.color }}>{planet.name}</p>
        </>
    )
}

export default Planet;