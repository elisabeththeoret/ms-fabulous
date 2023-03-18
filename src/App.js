import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HeaderNav from './components/HeaderNav.js';
import Footer from './components/Footer.js';


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
            description: "Mousse au chocolat sur un croustillant aux noisettes, déposés sur un biscuit aux noisettes et aux amandes.", 
            prix: "30.00", 
            categorie: "Gâteaux sur mesure", 
        }, {
            id: 2, 
            nom: "Millefeuilles individuels", 
            description: "Nos délicieux millefeuilles sont préparés avec soin à partir de pâte feuilletée et de crème pâtissière ou de crème fouettée entre les étages. Le dessus est garni d’un doux fondant à la vanille. Ils sont un dessert qui fera le bonheur des dents sucrées.", 
            prix: "28.50", 
            categorie: "Classiques", 
        }, {
            id: 3, 
            nom: "Meringues", 
            description: "Décorez vos desserts favoris ou concassez ces délicates meringues sur de la crème glacée.", 
            prix: "10.50", 
            categorie: "Classiques", 
        }, {
            id: 4, 
            nom: "Brioche Assiette Pommes", 
            description: "Brioche familiale à saveur de pommes à partager.", 
            prix: "6.50", 
            categorie: "Croissants & Co.", 
        }, {
            id: 5, 
            nom: "St-Honoré", 
            description: "Classique de la pâtisserie française à son meilleur, sur une base de pâte feuilletée amalgamée à une pâte à chou,vous retrouverez une onctueuse crème pâtissière vanillée surmontée d'une crème fouettée, en son centre une salade de fruits maison. Ce gâteau est garni de copeaux de chocolat noir ainsi que de cerises au marasquin.", 
            prix: "29.00", 
            categorie: "Gâteaux sur mesure", 
        }, {
            id: 6, 
            nom: "Éclairs", 
            description: "Les éclairs sont un excellent dessert français, à base de pâte à choux, fourrés de crème fouettée ou de crème pâtissière et recouverts d’un délicieux fondant au chocolat. La touche parfaite pour terminer votre repas en douceur.", 
            prix: "26.10", 
            categorie: "Classiques", 
        }, {
            id: 7, 
            nom: "Tarte aux bleuets", 
            description: "Tarte aux bleuets plus bleue que nature. Goûtez le vrai!", 
            prix: "9.95", 
            categorie: "Tartes", 
        }, {
            id: 8, 
            nom: "Chocolatine", 
            description: "Pâte à croissant 100% pur beurre garnie de chocolat noir bâton. C'est le délice des grands comme des petits!", 
            prix: "16.00", 
            categorie: "Croissants & Co.", 
        }, {
            id: 9, 
            nom: "Chausson aux pommes", 
            description: "Nos chaussons aux pommes sont faits à partir de pâte feuilletée, sont façonnés à la main et sont garnis de compote de pommes et de quartiers de pommes fraîches.", 
            prix: "23.70", 
            categorie: "Croissants & Co.", 
        }, {
            id: 10, 
            nom: "Tarte au sucre", 
            description: "Tarte traditionelle québécoise au sucre à la crème onctueux et riche en saveur. Chauffez-la légèrement et ajoutez-y une boule de glace à la vanille et vous ferez des heureux!", 
            prix: "9.95", 
            categorie: "Tartes", 
        }, {
            id: 11, 
            nom: "Croissant", 
            description: "Croissant 100% pur beurre, roulé à la main par nos artisans touriers. Cette pâte est poussée et levée tous les jours pour ensuite être cuite à la perfection.", 
            prix: "12.00", 
            categorie: "Croissants & Co.", 
        }, {
            id: 12, 
            nom: "Brioche Assiette Fraises", 
            description: "Brioche familiale à saveur de fraises à partager.", 
            prix: "6.50", 
            categorie: "Croissants & Co.", 
        }
    ]);

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
                        </>
                    } />
                </Routes>
                
                <Routes>
                    <Route path="/pastry" element = { 
                        <>
                        </>
                    } />
                </Routes>
                
                <Routes>
                    <Route path="/contact" element = { 
                        <>
                        </>
                    } />
                </Routes>
            </div>
            
            <Footer />
        </BrowserRouter>
    );

}

export default App;
