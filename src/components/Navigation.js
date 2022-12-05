import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import ToggleTheme from './ToggleTheme';

function Navigation({ logout, name }) {
    return (
            <nav className="navigation">
                <ul>
                    <li><h1><Link to={`/`}>MyNote</Link></h1></li>
                    <li><ToggleTheme /></li>
                    <li><button onClick={logout}>{name}<FiLogOut /></button></li>
                </ul>
            </nav>
    );
}

Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default Navigation;