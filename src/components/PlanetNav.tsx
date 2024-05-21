import { Link } from "react-router-dom"

function PlanetNav () {
    return (
        <nav>
            <ul>
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

export default PlanetNav