import { Link } from 'react-router-dom';


/**
 * Contact 
 * 
 * @return 
 */
const Contact = () => {

    /**
     * Render 
     */
    return (
        <section className="grille bg-light_green">
            <article className="boite align-center text-center border-light_green">
                <h3>Téléphone</h3>
                <Link to="#" className="texte-hover-dark_marron">514.555.0908</Link>
            </article>
            <article className="boite align-center text-center border-light_green">
                <h3>Courriel</h3>
                <Link to="#" className="texte-hover-dark_marron">info@msfabulous.com</Link>
            </article>
            <article className="boite align-center text-center border-light_green">
                <h3>Adresse postale</h3>
                <Link to="#" className="texte-hover-dark_marron">123, Sherbooke Est, Montréal (Québec) H6N 3R5</Link>
            </article>
        </section>
    );

};

export default Contact;
