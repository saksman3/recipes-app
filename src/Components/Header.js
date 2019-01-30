import React from 'react';

const Header = () => {
    return (
        <header className="page-header">
            <div className="logo">Recipes</div>

            <nav className="top-nav">
                
                <a href="/search.js">Categories</a>
                <a href="/search.js">Favourites</a>
                <a href="/search.js">About</a>
                <a href="/search.js">Contact</a>
                
            </nav>
        </header>
    );
};

export default Header;