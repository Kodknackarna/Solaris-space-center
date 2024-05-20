import PlanetType from "../models/planetType";
import Planet from "../components/Planet";

type planetProps = {
    planets : PlanetType []
}

function PlanetList ({ planets } : planetProps) {
    return (
    <>
        {planets.map(planet => (
            <Planet planet={planet} key={planet.id} />
        ))}
    </>
    )
}

export default PlanetList;