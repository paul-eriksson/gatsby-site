import React from 'react';
import PropTypes from 'prop-types';
import FaBars from 'react-icons/lib/fa/bars';
import './Navbar.scss';

class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {
            burgerToggle: false,
            currentPage: 0,
        };
    }

    NavClick(page){
        if (page !== this.state.currentPage){
            this.setState({
                currentPage: page,
            });
        }
    }

    render(){
        return (
            <header className="navbar">
                <div className="navbar__child navbar__child--left">
                    <div className="navbar__icon">{this.props.icon}</div>
                </div>
                <div className="navbar__child navbar__child--right">
                    <nav className="navbar__nav navbar__nav--wide">
                        {this.props.children.map((navItem, index) => {
                            return (
                                React.cloneElement(navItem, {
                                    onClick: () => this.NavClick(index),
                                    className: this.state.currentPage === index ? 'navbar__nav-item navbar__nav-item--current':'navbar__nav-item navbar__nav-item--other',
                                })
                            );
                        })}
                    </nav>
                    <nav className="navbar__nav navbar__nav--narrow">
                        <FaBars size="2.5em" className="navbar__navicon" onClick={() => (this.setState({ burgerToggle: !this.state.burgerToggle }))} />
                        {this.state.burgerToggle ?
                            <div className="navbar__navlinks navbar__navlinks--narrow">
                                {this.props.children.map((navItem, index) => {
                                    return (
                                        React.cloneElement(navItem, {
                                            onClick: () => this.NavClick(index),
                                            className: this.state.currentPage === index ? 'navbar__nav-item navbar__nav-item--current':'navbar__nav-item navbar__nav-item--other',
                                        })
                                    );
                                })}
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
