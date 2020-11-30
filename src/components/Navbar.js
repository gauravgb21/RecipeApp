import React from 'react';

const Navbar = props => {
    return(
        <nav className={'app-nav'}>
            <div className={"app-nav__title"} onClick={() => props.onTitleClick()}>Recipe App</div>
            <a className={'app-nav__filter'} onClick={() => props.onFilterClick()}>Filter</a>
        </nav>
    );
}

export default Navbar;