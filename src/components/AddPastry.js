import { useState } from 'react';


/**
 * Add Pastry 
 * 
 * @param { function } props.onAdd 
 * 
 * @return 
 */
const AddPastry = ( props ) => {

    /**
     * Proprietes 
     */
    const [ nom, setNom ] = useState('');
    const [ categorie, setCategorie ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ prix, setPrix ] = useState('');
    
    /**
     * On Submit 
     * 
     * @param { * } e 
     */
    const onSubmit = ( e ) => {
        e.preventDefault();
        
        if (! nom) {
            alert("Le nom du produit est manquant.");
            return;
        } else if (! categorie) {
            alert("La catégorie du produit est manquante.");
            return;
        } else if (! description) {
            alert("La description du produit est manquante.");
            return;
        } else if (! prix) {
            alert("Le prix du produit est manquant.");
            return;
        }
        
        props.onAdd({ nom, categorie, description, prix });
        setNom('');
        setCategorie('');
        setDescription('');
        setPrix('');
    };

    /**
     * Render 
     */
    return (
        <form className="flex col bg-light_marron" onSubmit={ onSubmit } >
            <div className="grille-lg gap-moyen">
                <div className="flex col">
                    <div className="form-control">
                        <label for="nom">Nom</label>
                        <input type="text" name="nom" id="nom" value={ nom } onChange={ (e) => setNom(e.target.value) } />
                    </div>
                    <div className="form-control">
                        <label for="categorie">Catégorie</label>
                        <input type="text" name="categorie" id="categorie" value={ categorie } onChange={ (e) => setCategorie(e.target.value) } />
                    </div>
                    <div className="form-control">
                        <label for="prix">Prix</label>
                        <input type="text" name="prix" id="prix" value={ prix } onChange={ (e) => setPrix(e.target.value) } />
                    </div>
                </div>
                <div className="form-control">
                    <label for="description">Description</label>
                    <textarea name="description" id="description" onChange={ (e) => setDescription(e.target.value) } value={ description }></textarea>
                </div>
            </div>
            <input type="submit" className="btn" value="Ajouter" />
        </form>
    );

};

export default AddPastry;
