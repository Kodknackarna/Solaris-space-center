import PlanetType from "../models/planetType";
import Planet from "../components/Planet";
import { Link } from "react-router-dom";

type planetProps = {
    planets : PlanetType [],
    updateHeaderText: (text: string) => void
}

function PlanetList ({ planets, updateHeaderText } : planetProps) {
    return (
    <>
        {planets.map(planet => (
            <Link to={`/planet/${planet.id}`} key={planet.id}>
            <Planet planet={planet} key={planet.id} updateHeaderText={updateHeaderText}/>
            </Link>
        ))}
    </>
    )
}

export default PlanetList;