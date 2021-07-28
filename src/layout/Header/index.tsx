import React from "react";

const Header = () => {
    return (
        <div className="site-wrap">
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle" />
                    </div>
                </div>
                <div className="site-mobile-menu-body" />
            </div>
            <div className="site-navbar mt-4">
                <div className="container py-1">
                    <div className="row align-items-center">
                        <div className="col-8 col-md-8 col-lg-4">
                            <h1 className="mb-0"><a href="index-2.html" className="text-white h2 mb-0"><strong>Homeland<span className="text-danger">.</span></strong></a></h1>
                        </div>
                        <div className="col-4 col-md-4 col-lg-8">
                            <nav className="site-navigation text-right text-md-right" role="navigation">
                                <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><span className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3" /></span></div>
                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                    <li className="active">
                                        <a href="index-2.html">Home</a>
                                    </li>
                                    <li><a href="buy.html">Buy</a></li>
                                    <li><a href="rent.html">Rent</a></li>
                                    <li className="has-children">
                                        <a href="properties.html">Properties</a>
                                        <ul className="dropdown arrow-top">
                                            <li>Condo</li>
                                            <li>Property Land</li>
                                            <li>Commercial Building</li>
                                            <li className="has-children">
                                                Sub Menu
                                                <ul className="dropdown">
                                                    <li>Menu One</li>
                                                    <li>Menu Two</li>
                                                    <li>Menu Three</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;
