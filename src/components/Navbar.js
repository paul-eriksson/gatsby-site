import React from 'react';
import PropTypes from 'prop-types';
import FaBars from 'react-icons/lib/fa/bars';
import './Navbar.scss';

class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {
            burgerToggle: false,
        };
    }
    render(){
        return (
            <header className="navbar">
                <div className="navbar__child navbar__child--left">
                    <div className="navbar__icon">{this.props.icon}</div>
                </div>
                <div className="navbar__child navbar__child--right">
                    <nav className="navbar__nav navbar__nav--wide">
                        {this.props.children}
                    </nav>
                    <nav className="navbar__nav navbar__nav--narrow">
                        <FaBars className="navbar__navicon" onClick={() => (this.setState({ burgerToggle: !this.state.burgerToggle }))} />
                        {this.state.burgerToggle ?
                            <div className="navbar__navlinks navbar__navlinks--narrow">
                                {this.props.children}
                            </div> : null
                        }
                    </nav>
                </div>
            </header>
        );
    }
}

NavBar.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.element.isRequired,
};
export default NavBar;
