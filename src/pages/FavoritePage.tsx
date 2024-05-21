import Planet from "../components/Planet";
import PlanetNav from "../components/PlanetNav";
import PlanetType from "../models/planetType";

type PlanetProps = {
    favoritePlanetList : PlanetType[]
}

function FavoritePage({ favoritePlanetList } : PlanetProps) {
    return (
        <section className="favoritePlanetList">
        {favoritePlanetList.length > 0 ? (
            favoritePlanetList.map(planet => (
                <Planet key={planet.id} planet={planet} updateHeaderText={() => {}} />
            ))
        ) : (
            <p>Inga favoritplaneter.</p>
        )}
        <PlanetNav />
    </section>
    )
}

export default FavoritePage;