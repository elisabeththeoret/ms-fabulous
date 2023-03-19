import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HeaderNav from './components/HeaderNav.js';
import HeaderPage from './components/HeaderPage.js';
import Button from './components/Button';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import ManyPastries from './components/ManyPastries.js';
import AddPastry from './components/AddPastry.js';


/**
 * App 
 */
function App() {

    /**
     * Data 
     */
    const [ pastries, setPastries ] = useState([
        {
            id: 1, 
            nom: "Royal chocolat", 
            categorie: "Gâteaux sur mesure", 
            description: "Mousse au chocolat sur un croustillant aux noisettes, déposés sur un biscuit aux noisettes et aux amandes.", 
            prix: "30.00", 
        }, {
            id: 2, 
            nom: "Millefeuilles individuels", 
            categorie: "Classiques", 
            description: "Nos délicieux millefeuilles sont préparés avec soin à partir de pâte feuilletée et de crème pâtissière ou de crème fouettée entre les étages. Le dessus est garni d’un doux fondant à la vanille. Ils sont un dessert qui fera le bonheur des dents sucrées.", 
            prix: "28.50", 
        }, {
            id: 3, 
            nom: "Meringues", 
            categorie: "Classiques", 
            description: "Décorez vos desserts favoris ou concassez ces délicates meringues sur de la crème glacée.", 
            prix: "10.50", 
        }, {
            id: 4, 
            nom: "Brioche Assiette Pommes", 
            categorie: "Croissants & Co.", 
            description: "Brioche familiale à saveur de pommes à partager.", 
            prix: "6.50", 
        }, {
            id: 5, 
            nom: "St-Honoré", 
            categorie: "Gâteaux sur mesure", 
            description: "Classique de la pâtisserie française à son meilleur, sur une base de pâte feuilletée amalgamée à une pâte à chou,vous retrouverez une onctueuse crème pâtissière vanillée surmontée d'une crème fouettée, en son centre une salade de fruits maison. Ce gâteau est garni de copeaux de chocolat noir ainsi que de cerises au marasquin.", 
            prix: "29.00", 
        }, {
            id: 6, 
            nom: "Éclairs", 
            categorie: "Classiques", 
            description: "Les éclairs sont un excellent dessert français, à base de pâte à choux, fourrés de crème fouettée ou de crème pâtissière et recouverts d’un délicieux fondant au chocolat. La touche parfaite pour terminer votre repas en douceur.", 
            prix: "26.10", 
        }, {
            id: 7, 
            nom: "Tarte aux bleuets", 
            categorie: "Tartes", 
            description: "Tarte aux bleuets plus bleue que nature. Goûtez le vrai!", 
            prix: "9.95", 
        }, {
            id: 8, 
            nom: "Chocolatine", 
            categorie: "Croissants & Co.", 
            description: "Pâte à croissant 100% pur beurre garnie de chocolat noir bâton. C'est le délice des grands comme des petits!", 
            prix: "16.00", 
        }, {
            id: 9, 
            nom: "Chausson aux pommes", 
            categorie: "Croissants & Co.", 
            description: "Nos chaussons aux pommes sont faits à partir de pâte feuilletée, sont façonnés à la main et sont garnis de compote de pommes et de quartiers de pommes fraîches.", 
            prix: "23.70", 
        }, {
            id: 10, 
            nom: "Tarte au sucre", 
            categorie: "Tartes", 
            description: "Tarte traditionelle québécoise au sucre à la crème onctueux et riche en saveur. Chauffez-la légèrement et ajoutez-y une boule de glace à la vanille et vous ferez des heureux!", 
            prix: "9.95", 
        }, {
            id: 11, 
            nom: "Croissant", 
            categorie: "Croissants & Co.", 
            description: "Croissant 100% pur beurre, roulé à la main par nos artisans touriers. Cette pâte est poussée et levée tous les jours pour ensuite être cuite à la perfection.", 
            prix: "12.00", 
        }, {
            id: 12, 
            nom: "Brioche Assiette Fraises", 
            categorie: "Croissants & Co.", 
            description: "Brioche familiale à saveur de fraises à partager.", 
            prix: "6.50", 
        }
    ]);

    /**
     * Add 
     * 
     * @param { object } pastry 
     */
    const addPastry = ( pastry ) => {
        // console.log(pastry);
        const id = Math.floor(Math.random() * 1000);
        console.log(id);
        const newPastry = { id, ...pastry };
        setPastries([ ...pastries, newPastry ]);
    };

    /**
     * Delete 
     * 
     * @param { int } id 
     */
    const deletePastry = ( id ) => {
        // console.log(id);
        setPastries(pastries.filter((pastry) => pastry.id !== id));
    };

    /**
     * Toggle Form 
     */
    const [ showAddPastry, setShowAddPastry ] = useState(false);

    /**
     * Render 
     */
    return (
        <BrowserRouter>
            <HeaderNav />
            
            <div className="app">
                <Routes>
                    <Route path="/" element = { 
                        <>
                            <HeaderPage 
                                titre="Bienvenue !" 
                                parag="Ms. Fabulous vous propose une gamme de produits exclusifs, faits de façon artisanale, à partir d’ingrédients de première qualité." 
                                bouton={ <Link to="/pastry" className="btn">Voir nos pâtisseries</Link> } 
                             />
                            <Home />
                        </>
                    } />
                </Routes>
                
                <Routes>
                    <Route path="/pastry" element = { 
                        <>
                            <HeaderPage 
                                titre="Nos pâtisseries" 
                                parag="Nous vous proposons une variété de gâteaux, de pâtisseries et de desserts confectionnés avec soin, à partir d’ingrédients de première qualité et sans aucun agent de conservation. Respectant les méthodes traditionnelles, nos artisans savent assembler les saveurs, les textures, pour vous offrir une variété de produits gourmands uniques à Ms. Fabulous." 
                                bouton={ <Button onClick={ () => setShowAddPastry(! showAddPastry) } text={ showAddPastry ? "Fermer" : "Ajouter" } /> } 
                             />
                            
                            { showAddPastry && <AddPastry onAdd={ addPastry } /> }
                            
                            { pastries.length > 0 ? (
                                <div className="grille-lg gap-trespetit">
                                    <ManyPastries 
                                        pastries={ pastries } 
                                        onDeleteMany={ deletePastry }
                                        />
                                </div>
                            ) : (
                                <div className="flex col">
                                    <h3>Oups!</h3>
                                    <p>Aucune pâtisserie disponible pour le moment.</p>
                                </div>
                            ) }
                            
                        </>
                    } />
                </Routes>
                
                <Routes>
                    <Route path="/contact" element = { 
                        <>
                            <HeaderPage 
                                titre="Nous joindre" 
                                parag='Vous avez des questions sur nos produits ou notre entreprise? N’hésitez pas à communiquer avec votre succursale!' 
                             />
                            <Contact />
                        </>
                    } />
                </Routes>
            </div>
            
            <Footer />
        </BrowserRouter>
    );

}

export default App;
