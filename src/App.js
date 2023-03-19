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
