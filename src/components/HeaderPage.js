import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


/**
 * HeaderPage 
 * 
 * @param { string } props.titre 
 * @param { string } props.parag 
 * @param { object } props.bouton 
 * 
 * @return 
 */
const HeaderPage = ( props ) => {

    /**
     * Render 
     */
    return (
        <header className="flex col">
            <h1>{ props.titre }</h1>
            <p>{ props.parag }</p>
            
            { props.bouton }
        </header>
    );

};

HeaderPage.propTypes = {
    titre: PropTypes.string.isRequired, 
    parag: PropTypes.string, 
};

export default HeaderPage;
