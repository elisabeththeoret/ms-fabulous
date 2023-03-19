import { Link } from 'react-router-dom';
import PastryCard from './PastryCard.js';


/**
 * Many Pastries 
 * 
 * @param { array } props.pastries 
 * @param { function } props.onDelete 
 * 
 * @return 
 */
const ManyPastries = ( props ) => {

    /**
     * Render 
     */
    return (
        <>
            { props.pastries.map((pastry) => (
                <PastryCard 
                    key={ pastry.id } 
                    pastry={ pastry } 
                    onDelete={ props.onDeleteMany }
                 />
            )) }
        </>
    );

};

export default ManyPastries;
