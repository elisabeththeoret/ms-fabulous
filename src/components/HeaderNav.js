import { Link } from 'react-router-dom';


/**
 * HeaderNav 
 * 
 * @return 
 */
const HeaderNav = () => {

    /**
     * Render 
     */ 
    return (
        <header className="flex row header bg-light_rosemauve texte-marron">
            <nav className="flex row nav-principale">
                <Link to="/" className="logo btn">Ms. Fabulous</Link>
                <Link to="/pastry" className="btn">Pâtisseries</Link>
                <Link to="/contact" className="btn">Contact</Link>
            </nav>
        </header>
    );

};

export default HeaderNav;
