import React, { Component } from 'react'
import { Link } from "react-router-dom";
import LoadingDots from './shared/LoadingDots';
import PropTypes from 'prop-types';

class NavBar extends Component {
    

    render() {
        return (

            <nav className="navbar navbar-default">
            { this.props.loading &&  <LoadingDots interval={100} dots={20}/> }
            
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" >Redux</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/PostPage"> Post Page</Link>
                            </li>
                            <li>
                                <Link to="/CoursePage"> Course List </Link>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Other Brand
                                <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a>About</a>
                                    </li>
                                    <li>
                                        <a>ABC</a>
                                    </li>
                                    <li>
                                        <a>DEF</a>
                                    </li>
                                    <li role="separator" className="divider"></li>
                                    <li>
                                        <a>Other Items</a>
                                    </li>
                                    <li role="separator" className="divider"></li>
                                    <li>
                                        <a>GHI</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> chirantan &nbsp;
                                 <span className="caret"></span>
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <a> Setting </a>
                                    </li>
                                    <li>
                                        <a> Account </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

NavBar.propTypes = {
    loading : PropTypes.bool.isRequired
}

export default NavBar;

