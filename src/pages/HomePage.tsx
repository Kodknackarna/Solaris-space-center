import PlanetList from "../components/PlanetList";
import PlanetType from "../models/planetType";

type planetProps = {
    planets : PlanetType[]
}

function HomePage({ planets } : planetProps) {
    return (
        <>
        <PlanetList  planets = { planets }/>
        </>
    )
}

export default HomePage;