import { useState } from 'react';
import PlanetList from "../components/PlanetList";
import PlanetType from "../models/planetType";
import '../styles/pagesStyles/homePage.css'
import PlanetNav from '../components/PlanetNav';


type planetProps = {
    planets : PlanetType[]
}

function HomePage({ planets }: planetProps) {
    const [headerText, setHeaderText] = useState("Solaris Space Center");

    const updateHeaderText = (text: string) => {
        setHeaderText(text);
    };

    return (
        <section className="homePageWrapper">
            <h1>{headerText}</h1>
            <div className="planetWrapper">
                <PlanetList planets={planets} updateHeaderText={updateHeaderText} />
            </div>
            <div className="Home-navigation">
                <PlanetNav />
            </div>
        </section>
    )
}

export default HomePage