import Planet from "../components/Planet";
import PlanetNav from "../components/PlanetNav";
import PlanetType from "../models/planetType";
import '../styles/pagesStyles/favoritePage.css'
import BackgroundImage from '../assets/stars-background.jpg';

type PlanetProps = {
    favoritePlanetList : PlanetType[]
}

function FavoritePage({ favoritePlanetList } : PlanetProps) {
    return (
        <section className="favorite-background" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <section className="favoritePlanetList">
        {favoritePlanetList.length > 0 ? (
            favoritePlanetList.map(planet => (
                <Planet key={planet.id} planet={planet} updateHeaderText={() => {}} />
            ))
        ) : (
            <p>Inga favoritplaneter.</p>
        )}
        
        </section>
            <div className="favorite-navigation">
                <PlanetNav />
            </div>
         </section>
    )
}

export default FavoritePage;