import { FaTimes } from 'react-icons/fa';


/**
 * Pastry Card 
 * 
 * @param { object } props.pastry 
 * 
 * @return 
 */
const PastryCard = ( props ) => {

    /**
     * Render 
     */
    return (
        <article className="boite bg-light_green border-light_green">
            <h2>{ props.pastry.nom }</h2>
            <FaTimes 
                className="icone" 
                onClick={ () => props.onDelete(props.pastry.id) } 
            />
            <h4>{ props.pastry.categorie }</h4>
            <p>{ props.pastry.description }</p>
            <span>{ props.pastry.prix } $</span>
        </article>
    );

};

export default PastryCard;
