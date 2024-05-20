import PlanetType from "../models/planetType";
import Planet from "../components/Planet";

type planetProps = {
    planets : PlanetType [],
    updateHeaderText: (text: string) => void
}

function PlanetList ({ planets, updateHeaderText } : planetProps) {
    return (
    <>
        {planets.map(planet => (
            <Planet planet={planet} key={planet.id} updateHeaderText={updateHeaderText}/>
        ))}
    </>
    )
}

export default PlanetList;