import React, {useContext} from 'react';
import Loading from "../../components/layout/Loading";
import {LayoutContext} from "../../contexts/LayoutContext";

function HomeLayout() {
    const {isLoading} = useContext(LayoutContext);
    return (
        <div className='home-layout'>
            <Loading isLoading = {isLoading}/>
            <div className="site-wrap">
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"/>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"/>
                </div>
                <div className="site-navbar mt-4">
                    <div className="container py-1">
                        <div className="row align-items-center">
                            <div className="col-8 col-md-8 col-lg-4">
                                <h1 className="mb-0"><a href="index-2.html" className="text-white h2 mb-0"><strong>Homeland<span
                                    className="text-danger">.</span></strong></a></h1>
                            </div>
                            <div className="col-4 col-md-4 col-lg-8">
                                <nav className="site-navigation text-right text-md-right" role="navigation">
                                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#"
                                                                                                      className="site-menu-toggle js-menu-toggle text-white"><span
                                        className="icon-menu h3"/></a></div>
                                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                                        <li className="active">
                                            <a href="index-2.html">Home</a>
                                        </li>
                                        <li><a href="buy.html">Buy</a></li>
                                        <li><a href="rent.html">Rent</a></li>
                                        <li className="has-children">
                                            <a href="properties.html">Properties</a>
                                            <ul className="dropdown arrow-top">
                                                <li><a href="#">Condo</a></li>
                                                <li><a href="#">Property Land</a></li>
                                                <li><a href="#">Commercial Building</a></li>
                                                <li className="has-children">
                                                    <a href="#">Sub Menu</a>
                                                    <ul className="dropdown">
                                                        <li><a href="#">Menu One</a></li>
                                                        <li><a href="#">Menu Two</a></li>
                                                        <li><a href="#">Menu Three</a></li>
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
            <div className="slide-one-item home-slider owl-carousel">
                <div className="site-blocks-cover overlay" style={{backgroundImage: 'url(assets/images/hero_bg_1.jpg)'}}
                     data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-md-10">
                                <span
                                    className="d-inline-block bg-success text-white px-3 mb-3 property-offer-type rounded">For Rent</span>
                                <h1 className="mb-2">871 Crenshaw Blvd</h1>
                                <p className="mb-5"><strong
                                    className="h2 text-success font-weight-bold">$2,250,500</strong></p>
                                <p><a href="#" className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">See
                                    Details</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-blocks-cover overlay" style={{backgroundImage: 'url(assets/images/hero_bg_2.jpg)'}}
                     data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-md-10">
                                <span
                                    className="d-inline-block bg-danger text-white px-3 mb-3 property-offer-type rounded">For Sale</span>
                                <h1 className="mb-2">625 S. Berendo St</h1>
                                <p className="mb-5"><strong
                                    className="h2 text-success font-weight-bold">$1,000,500</strong></p>
                                <p><a href="#" className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">See
                                    Details</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section site-section-sm pb-0">
                <div className="container">
                    <div className="row">
                        <form className="form-search col-md-12" style={{marginTop: '-100px'}}>
                            <div className="row  align-items-end">
                                <div className="col-md-3">
                                    <label htmlFor="list-types">Listing Types</label>
                                    <div className="select-wrap">
                                        <span className="icon icon-arrow_drop_down"/>
                                        <select name="list-types" id="list-types"
                                                className="form-control d-block rounded-0">
                                            <option>Condo</option>
                                            <option>Commercial Building</option>
                                            <option>Land Property</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="offer-types">Offer Type</label>
                                    <div className="select-wrap">
                                        <span className="icon icon-arrow_drop_down"/>
                                        <select name="offer-types" id="offer-types"
                                                className="form-control d-block rounded-0">
                                            <option>For Sale</option>
                                            <option>For Rent</option>
                                            <option>For Lease</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="select-city">Select City</label>
                                    <div className="select-wrap">
                                        <span className="icon icon-arrow_drop_down"/>
                                        <select name="select-city" id="select-city"
                                                className="form-control d-block rounded-0">
                                            <option>New York</option>
                                            <option>Brooklyn</option>
                                            <option>London</option>
                                            <option>Japan</option>
                                            <option>Philippines</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <input type="submit" className="btn btn-success text-white btn-block rounded-0"
                                           defaultValue="Search"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="view-options bg-white py-3 px-3 d-md-flex align-items-center">
                                <div className="mr-auto">
                                    <a href="index-2.html" className="icon-view view-module active"><span
                                        className="icon-view_module"/></a>
                                    <a href="view-list.html" className="icon-view view-list"><span
                                        className="icon-view_list"/></a>
                                </div>
                                <div className="ml-auto d-flex align-items-center">
                                    <div>
                                        <a href="#" className="view-list px-3 border-right active">All</a>
                                        <a href="#" className="view-list px-3 border-right">Rent</a>
                                        <a href="#" className="view-list px-3">Sale</a>
                                    </div>
                                    <div className="select-wrap">
                                        <span className="icon icon-arrow_drop_down"/>
                                        <select className="form-control form-control-sm d-block rounded-0">
                                            <option>Sort by</option>
                                            <option>Price Ascending</option>
                                            <option>Price Descending</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section site-section-sm bg-light">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="property-entry h-100">
                                <a href="property-details.html" className="property-thumbnail">
                                    <div className="offer-type-wrap">
                                        <span className="offer-type bg-danger">Sale</span>
                                        <span className="offer-type bg-success">Rent</span>
                                    </div>
                                    <img src="assets/images/img_1.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <div className="p-4 property-body">
                                    <a href="#" className="property-favorite"><span className="icon-heart-o"/></a>
                                    <h2 className="property-title"><a href="property-details.html">625 S. Berendo St</a>
                                    </h2>
                                    <span className="property-location d-block mb-3"><span
                                        className="property-icon icon-room"/> 625 S. Berendo St Unit 607 Los Angeles, CA 90005</span>
                                    <strong
                                        className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                                    <ul className="property-specs-wrap mb-3 mb-lg-0">
                                        <li>
                                            <span className="property-specs">Beds</span>
                                            <span className="property-specs-number">2 <sup>+</sup></span>
                                        </li>
                                        <li>
                                            <span className="property-specs">Baths</span>
                                            <span className="property-specs-number">2</span>
                                        </li>
                                        <li>
                                            <span className="property-specs">SQ FT</span>
                                            <span className="property-specs-number">7,000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="property-entry h-100">
                                <a href="property-details.html" className="property-thumbnail">
                                    <div className="offer-type-wrap">
                                        <span className="offer-type bg-danger">Sale</span>
                                        <span className="offer-type bg-success">Rent</span>
                                    </div>
                                    <img src="assets/images/img_2.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <div className="p-4 property-body">
                                    <a href="#" className="property-favorite active"><span
                                        className="icon-heart-o"/></a>
                                    <h2 className="property-title"><a href="property-details.html">871 Crenshaw Blvd</a>
                                    </h2>
                                    <span className="property-location d-block mb-3"><span
                                        className="property-icon icon-room"/> 1 New York Ave, Warners Bay, NSW 2282</span>
                                    <strong
                                        className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                                    <ul className="property-specs-wrap mb-3 mb-lg-0">
                                        <li>
                                            <span className="property-specs">Beds</span>
                                            <span className="property-specs-number">2 <sup>+</sup></span>
                                        </li>
                                        <li>
                                            <span className="property-specs">Baths</span>
                                            <span className="property-specs-number">2</span>
                                        </li>
                                        <li>
                                            <span className="property-specs">SQ FT</span>
                                            <span className="property-specs-number">1,620</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="property-entry h-100">
                                <a href="property-details.html" className="property-thumbnail">
                                    <div className="offer-type-wrap">
                                        <span className="offer-type bg-info">Lease</span>
                                    </div>
                                    <img src="assets/images/img_3.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <div className="p-4 property-body">
                                    <a href="#" className="property-favorite"><span className="icon-heart-o"/></a>
                                    <h2 className="property-title"><a href="property-details.html">853 S Lucerne
                                        Blvd</a></h2>
                                    <span className="property-location d-block mb-3"><span
                                        className="property-icon icon-room"/> 853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005</span>
                                    <strong
                                        className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                                    <ul className="property-specs-wrap mb-3 mb-lg-0">
                                        <li>
                                            <span className="property-specs">Beds</span>
                                            <span className="property-specs-number">2 <sup>+</sup></span>
                                        </li>
                                        <li>
                                            <span className="property-specs">Baths</span>
                                            <span className="property-specs-number">2</span>
                                        </li>
                                        <li>
                                            <span className="property-specs">SQ FT</span>
                                            <span className="property-specs-number">5,500</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="property-entry h-100">
                                <a href="property-details.html" className="property-thumbnail">
                                    <div className="offer-type-wrap">
                                        <span className="offer-type bg-danger">Sale</span>
                                        <span className="offer-type bg-success">Rent</span>
                                    </div>
                                    <img src="assets/images/img_4.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <div className="p-4 property-body">
                                    <a href="#" className="property-favorite"><span className="icon-heart-o"/></a>
                                    <h2 className="property-title"><a href="property-details.html">625 S. Berendo St</a>
                                    </h2>
                                    <span className="property-location d-block mb-3"><span
                                        className="property-icon icon-room"/> 625 S. Berendo St Unit 607 Los Angeles, CA 90005</span>
                                    <strong
                                        className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                                    <ul className="property-specs-wrap mb-3 mb-lg-0">
                                        <li>
                                            <span className="property-specs">Beds</span>
                                            <span className="property-specs-number">2 <sup>+</sup></span>
                                        </li>
                                        <li>
                                            <span className="property-specs">Baths</span>
                                            <span className="property-specs-number">2</span>
                                        </li>
                                        <li>
                                            <span className="property-specs">SQ FT</span>
                                            <span className="property-specs-number">7,000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="property-entry h-100">
                                <a href="property-details.html" className="property-thumbnail">
                                    <div className="offer-type-wrap">
                                        <span className="offer-type bg-danger">Sale</span>
                                        <span className="offer-type bg-success">Rent</span>
                                    </div>
                                    <img src="assets/images/img_5.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <div className="p-4 property-body">
                                    <a href="#" className="property-favorite"><span className="icon-heart-o"/></a>
                                    <h2 className="property-title"><a href="property-details.html">871 Crenshaw Blvd</a>
                                    </h2>
                                    <span className="property-location d-block mb-3"><span
                                        className="property-icon icon-room"/> 1 New York Ave, Warners Bay, NSW 2282</span>
                                    <strong
                                        className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                                    <ul className="property-specs-wrap mb-3 mb-lg-0">
                                        <li>
                                            <span className="property-specs">Beds</span>
                                            <span className="property-specs-number">2 <sup>+</sup></span>
                                        </li>
                                        <li>
                                            <span className="property-specs">Baths</span>
                                            <span className="property-specs-number">2</span>
                                        </li>
                                        <li>
                                            <span className="property-specs">SQ FT</span>
                                            <span className="property-specs-number">1,620</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="property-entry h-100">
                                <a href="property-details.html" className="property-thumbnail">
                                    <div className="offer-type-wrap">
                                        <span className="offer-type bg-info">Lease</span>
                                    </div>
                                    <img src="assets/images/img_6.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <div className="p-4 property-body">
                                    <a href="#" className="property-favorite"><span className="icon-heart-o"/></a>
                                    <h2 className="property-title"><a href="property-details.html">853 S Lucerne
                                        Blvd</a></h2>
                                    <span className="property-location d-block mb-3"><span
                                        className="property-icon icon-room"/> 853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005</span>
                                    <strong
                                        className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                                    <ul className="property-specs-wrap mb-3 mb-lg-0">
                                        <li>
                                            <span className="property-specs">Beds</span>
                                            <span className="property-specs-number">2 <sup>+</sup></span>
                                        </li>
                                        <li>
                                            <span className="property-specs">Baths</span>
                                            <span className="property-specs-number">2</span>
                                        </li>
                                        <li>
                                            <span className="property-specs">SQ FT</span>
                                            <span className="property-specs-number">5,500</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="property-entry h-100">
                                <a href="property-details.html" className="property-thumbnail">
                                    <div className="offer-type-wrap">
                                        <span className="offer-type bg-danger">Sale</span>
                                        <span className="offer-type bg-success">Rent</span>
                                    </div>
                                    <img src="assets/images/img_7.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <div className="p-4 property-body">
                                    <a href="#" className="property-favorite"><span className="icon-heart-o"/></a>
                                    <h2 className="property-title"><a href="property-details.html">625 S. Berendo St</a>
                                    </h2>
                                    <span className="property-location d-block mb-3"><span
                                        className="property-icon icon-room"/> 625 S. Berendo St Unit 607 Los Angeles, CA 90005</span>
                                    <strong
                                        className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                                    <ul className="property-specs-wrap mb-3 mb-lg-0">
                                        <li>
                                            <span className="property-specs">Beds</span>
                                            <span className="property-specs-number">2 <sup>+</sup></span>
                                        </li>
                                        <li>
                                            <span className="property-specs">Baths</span>
                                            <span className="property-specs-number">2</span>
                                        </li>
                                        <li>
                                            <span className="property-specs">SQ FT</span>
                                            <span className="property-specs-number">7,000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="property-entry h-100">
                                <a href="property-details.html" className="property-thumbnail">
                                    <div className="offer-type-wrap">
                                        <span className="offer-type bg-danger">Sale</span>
                                        <span className="offer-type bg-success">Rent</span>
                                    </div>
                                    <img src="assets/images/ximg_8.jpg.pagespeed.ic.ZkfNGUz2PX.jpg" alt="Image"
                                         className="img-fluid"/>
                                </a>
                                <div className="p-4 property-body">
                                    <a href="#" className="property-favorite"><span className="icon-heart-o"/></a>
                                    <h2 className="property-title"><a href="property-details.html">871 Crenshaw Blvd</a>
                                    </h2>
                                    <span className="property-location d-block mb-3"><span
                                        className="property-icon icon-room"/> 1 New York Ave, Warners Bay, NSW 2282</span>
                                    <strong
                                        className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                                    <ul className="property-specs-wrap mb-3 mb-lg-0">
                                        <li>
                                            <span className="property-specs">Beds</span>
                                            <span className="property-specs-number">2 <sup>+</sup></span>
                                        </li>
                                        <li>
                                            <span className="property-specs">Baths</span>
                                            <span className="property-specs-number">2</span>
                                        </li>
                                        <li>
                                            <span className="property-specs">SQ FT</span>
                                            <span className="property-specs-number">1,620</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="property-entry h-100">
                                <a href="property-details.html" className="property-thumbnail">
                                    <div className="offer-type-wrap">
                                        <span className="offer-type bg-info">Lease</span>
                                    </div>
                                    <img src="assets/images/img_1.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <div className="p-4 property-body">
                                    <a href="#" className="property-favorite"><span className="icon-heart-o"/></a>
                                    <h2 className="property-title"><a href="property-details.html">853 S Lucerne
                                        Blvd</a></h2>
                                    <span className="property-location d-block mb-3"><span
                                        className="property-icon icon-room"/> 853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005</span>
                                    <strong
                                        className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                                    <ul className="property-specs-wrap mb-3 mb-lg-0">
                                        <li>
                                            <span className="property-specs">Beds</span>
                                            <span className="property-specs-number">2 <sup>+</sup></span>
                                        </li>
                                        <li>
                                            <span className="property-specs">Baths</span>
                                            <span className="property-specs-number">2</span>
                                        </li>
                                        <li>
                                            <span className="property-specs">SQ FT</span>
                                            <span className="property-specs-number">5,500</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="site-pagination">
                                <a href="#" className="active">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <span>...</span>
                                <a href="#">10</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <div className="site-section-title">
                                <h2>Why Choose Us?</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe
                                architecto
                                error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis,
                                eaque,
                                deleniti cupiditate officia.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <a href="#" className="service text-center">
                                <span className="icon flaticon-house"/>
                                <h2 className="service-heading">Research Subburbs</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus
                                    perspiciatis ex
                                    odio molestia.</p>
                                <p><span className="read-more">Read More</span></p>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a href="#" className="service text-center">
                                <span className="icon flaticon-sold"/>
                                <h2 className="service-heading">Sold Houses</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus
                                    perspiciatis ex
                                    odio molestia.</p>
                                <p><span className="read-more">Read More</span></p>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a href="#" className="service text-center">
                                <span className="icon flaticon-camera"/>
                                <h2 className="service-heading">Security Priority</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus
                                    perspiciatis ex
                                    odio molestia.</p>
                                <p><span className="read-more">Read More</span></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 text-center">
                            <div className="site-section-title">
                                <h2>Recent Blog</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe
                                architecto
                                error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis,
                                eaque,
                                deleniti cupiditate officia.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={100}>
                            <a href="#"><img src="assets/images/img_4.jpg" alt="Image" className="img-fluid"/></a>
                            <div className="p-4 bg-white">
                                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                                <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa
                                    exercitationem veniam
                                    quae sunt.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <a href="#"><img src="assets/images/img_2.jpg" alt="Image" className="img-fluid"/></a>
                            <div className="p-4 bg-white">
                                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                                <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa
                                    exercitationem veniam
                                    quae sunt.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={300}>
                            <a href="#"><img src="assets/images/img_3.jpg" alt="Image" className="img-fluid"/></a>
                            <div className="p-4 bg-white">
                                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                                <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa
                                    exercitationem veniam
                                    quae sunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-7">
                            <div className="site-section-title text-center">
                                <h2>Our Agents</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero magnam officiis ipsa
                                    eum pariatur
                                    labore fugit amet eaque iure vitae, repellendus laborum in modi reiciendis quis!
                                    Optio minima
                                    quibusdam, laboriosam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="assets/images/person_1.jpg" alt="Image" className="img-fluid rounded mb-4"/>
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light text-black h4">Megan Smith</h2>
                                    <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non
                                        quis facere
                                        blanditiis praesentium est. Totam atque corporis nisi, veniam non. Tempore
                                        cupiditate, vitae
                                        minus obcaecati provident beatae!</p>
                                    <p>
                                        <a href="#" className="text-black p-2"><span className="icon-facebook"/></a>
                                        <a href="#" className="text-black p-2"><span className="icon-twitter"/></a>
                                        <a href="#" className="text-black p-2"><span className="icon-linkedin"/></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="assets/images/person_2.jpg" alt="Image" className="img-fluid rounded mb-4"/>
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light text-black h4">Brooke Cagle</h2>
                                    <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cumque vitae
                                        voluptates
                                        culpa earum similique corrupti itaque veniam doloribus amet perspiciatis
                                        recusandae sequi
                                        nihil tenetur ad, modi quos id magni!</p>
                                    <p>
                                        <a href="#" className="text-black p-2"><span className="icon-facebook"/></a>
                                        <a href="#" className="text-black p-2"><span className="icon-twitter"/></a>
                                        <a href="#" className="text-black p-2"><span className="icon-linkedin"/></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="assets/images/person_3.jpg" alt="Image" className="img-fluid rounded mb-4"/>
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light text-black h4">Philip Martin</h2>
                                    <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto,
                                        inventore, iure
                                        dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo. Atque
                                        cupiditate,
                                        voluptates pariatur odit officia libero veniam quo.</p>
                                    <p>
                                        <a href="#" className="text-black p-2"><span className="icon-facebook"/></a>
                                        <a href="#" className="text-black p-2"><span className="icon-twitter"/></a>
                                        <a href="#" className="text-black p-2"><span className="icon-linkedin"/></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mb-5">
                                <h3 className="footer-heading mb-4">About Homeland</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur
                                    reprehenderit vero
                                    atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum
                                    totam quis
                                    blanditiis, minima minus odio!</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="row mb-5">
                                <div className="col-md-12">
                                    <h3 className="footer-heading mb-4">Navigations</h3>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Buy</a></li>
                                        <li><a href="#">Rent</a></li>
                                        <li><a href="#">Properties</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <ul className="list-unstyled">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Terms</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h3 className="footer-heading mb-4">Follow Us</h3>
                            <div>
                                <a href="#" className="pl-0 pr-3"><span className="icon-facebook"/></a>
                                <a href="#" className="pl-3 pr-3"><span className="icon-twitter"/></a>
                                <a href="#" className="pl-3 pr-3"><span className="icon-instagram"/></a>
                                <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <p>
                                Copyright ©
                                All rights reserved | This template is made with <i className="icon-heart text-danger"
                                                                                    aria-hidden="true"/> by <a
                                href="https://colorlib.com/" target="_blank">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomeLayout;
