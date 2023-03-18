import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


/**
 * HeaderPage 
 * 
 * @param { string } props.titre 
 * @param { string } props.parag 
 * @param { string } props.bouton 
 * @param { string } props.linkTo 
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
            
            { props.bouton != null && (
                <Link to={ props.linkTo } className="btn">{ props.bouton }</Link>
            ) }
        </header>
    );

};

HeaderPage.defaultProps = {
    linkTo: '/', 
};

HeaderPage.propTypes = {
    titre: PropTypes.string.isRequired, 
    parag: PropTypes.string, 
    bouton: PropTypes.string, 
    linkTo: PropTypes.string, 
};

export default HeaderPage;
