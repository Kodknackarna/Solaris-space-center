import PlanetList from "../components/PlanetList";
import PlanetType from "../models/planetType";
import '../styles/pagesStyles/homePage.css'


type planetProps = {
    planets : PlanetType[]
}

function HomePage({ planets } : planetProps) {
    return (
        <section className="homePageWrapper">
            <h1>Solaris Space Center</h1>
            <div className="planetWrapper">
            <PlanetList  planets = { planets }/>
            </div>
        </section>
    )
}

export default HomePage;