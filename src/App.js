import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HeaderNav from './components/HeaderNav.js';
import Footer from './components/Footer.js';


/**
 * App 
 */
function App() {

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
