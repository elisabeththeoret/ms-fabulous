
/**
 * Home 
 * 
 * @return 
 */
const Home = () => {

    /**
     * Render 
     */
    return (
        <>
            <section className="flex col">
                <h2>Catégories</h2>
                <div className="grille gap-trespetit">
                    <div className="boite bg-light_marron border-light_marron">
                        <h4>Nos gâteaux sur mesure</h4>
                        <p>Quelle est l'occasion? Découvrez nos fabuleux gâteaux faits sur mesure!</p>
                    </div>
                    <div className="boite bg-light_marron border-light_marron">
                        <h4>Les classiques</h4>
                        <p>Les desserts qui ne disparaîtront jamais.</p>
                    </div>
                    <div className="boite bg-light_marron border-light_marron">
                        <h4>Nos croissants & Co.</h4>
                        <p>Venez voir nos merveilleux croissants roulés à la main par nos artisans touriers.</p>
                    </div>
                    <div className="boite bg-light_marron border-light_marron">
                        <h4>Nos tartes</h4>
                        <p>Découvrez nos déliceuses tartes et goûtez le vrai!</p>
                    </div>
                </div>
            </section>
            
            <section className="flex col bg-light_green">
                <h2>Une expertise artisanale</h2>
                <p>Chaque jour, nos artisans sont heureux de vous proposer des produits frais, faits à la main, dans le respect des traditions. De plus, nos artisans sont passionnés, dévoués et souhaitent vous offrir des produits faits avec amour, à partir d’ingrédients de première qualité, avec le meilleur savoir-faire possible.</p>
            </section>
            
            <section className="flex col">
                <h2>Une petite histoire</h2>
                <div className="flex col gap-mini">
                    <p>La boulangerie Ms. Fabulous est une peite entreprise familiale. L'idée venue de Nathalie Piché, boulangère et pâtissière, elle a fondé l'entreprise en 2007. Dès le début, les principes fondamentaux de fabrication traditionnelle, soutenue par des techniques artisanales, ont été mis à l’avant plan.</p>
                    <p>Encore aujourd’hui, la qualité des produits, le professionnalisme des équipes et le souci quotidien de confectionner à la main des produits de première qualité anime Ms. Fabulous. Par ailleurs, les principaux axes de son succès sont: l’accueil, l’hospitalité, la famille, la découverte, la qualité et la satisfaction que procurent ses produits. C’est pourquoi l’ensemble de ces éléments font de Ms. Fabulous un leader régional dans le domaine de la fabrication artisanale.</p>
                </div>
            </section>
        </>
    );

};

export default Home;
