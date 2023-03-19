import PropTypes from 'prop-types';


/**
 * Button 
 * 
 * @param { string } props.text 
 * @param { function } props.onClick 
 * 
 * @return 
 */
const Button = ( props ) => {

    // Render 
    return (
        <button
            className="btn"
            onClick={ props.onClick }
        >
            { props.text }
        </button>
    );

};

Button.propTypes = {
    text: PropTypes.string.isRequired, 
    onClick: PropTypes.func.isRequired, 
};

export default Button;
