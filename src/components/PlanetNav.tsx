import { Link } from "react-router-dom"
import '../styles/componentsStyles/planetNav.css'

function PlanetNav () {
    return (
        <nav>
            <ul className="navigationList">
                <li>
                    <Link to="/">Hem</Link>
                </li>
                <li>
                    <Link to="/favorites">Favoriter</Link>
                </li>
            </ul>
        </nav>
    );
}

export default PlanetNav;