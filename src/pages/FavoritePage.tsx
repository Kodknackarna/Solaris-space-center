import Planet from "../components/Planet";
import PlanetNav from "../components/PlanetNav";
import PlanetType from "../models/planetType";
import '../styles/pagesStyles/favoritePage.css'
import BackgroundImage from '../assets/stars-background.jpg';
import FavoritePlanet from "../components/FavoritePlanet";

type PlanetProps = {
    favoritePlanetList : PlanetType[]
}

function FavoritePage({ favoritePlanetList }: PlanetProps) {
    const sortedFavoritePlanetList = [...favoritePlanetList].sort((a, b) => a.id - b.id);

    return (
        <section className="favorite-background" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="favoritePlanetList">
            {sortedFavoritePlanetList.length > 0 ? (
                sortedFavoritePlanetList.map(planet => (
                    <div key={planet.id}>
                            <Planet planet={planet} updateHeaderText={() => {}} />
                            <FavoritePlanet planet={planet} />
                    </div>
                ))
            ) : (
                <p className="nofavo">Inga favoritplaneter</p>
            )}
            
            </div>
                <div className="favorite-navigation">
                    <PlanetNav />
                </div>
         </section>
    )
}

export default FavoritePage;