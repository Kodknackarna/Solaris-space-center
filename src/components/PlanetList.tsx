import PlanetType from "../models/planetType";
import Planet from "../components/Planet";
import { Link } from "react-router-dom";

type planetProps = {
    planets: PlanetType[],
    updateHeaderText: (text: string) => void
}

function PlanetList({ planets, updateHeaderText }: planetProps) {
    const handleMouseEnter = (planetName: string) => {
        console.log(`Mouse entered: ${planetName}`);
    };

    const handleMouseLeave = (planetName: string) => {
        console.log(`Mouse left: ${planetName}`);
    };

    return (
    <>
        {planets.map(planet => (
            <Link to={`/planet/${planet.id}`} key={planet.id}>
                <Planet 
                    planet={planet} 
                    key={planet.id} 
                    updateHeaderText={updateHeaderText}
                    onMouseEnter={() => handleMouseEnter(planet.name)}
                    onMouseLeave={() => handleMouseLeave(planet.name)}
                />
            </Link>
        ))}
    </>
    )
}

export default PlanetList;