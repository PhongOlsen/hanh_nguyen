import React from 'react';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="mb-5">
                            <h3 className="footer-heading mb-4">About Homeland</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque,
                                consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima
                                minus odio!</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="row mb-5">
                            <div className="col-md-12">
                                <h3 className="footer-heading mb-4">Navigations</h3>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <ul className="list-unstyled">
                                    <li><span>Home</span></li>
                                    <li><span>Buy</span></li>
                                    <li><span>Rent</span></li>
                                    <li><span>Properties</span></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <ul className="list-unstyled">
                                    <li><span>About Us</span></li>
                                    <li><span>Privacy Policy</span></li>
                                    <li><span>Contact Us</span></li>
                                    <li><span>Terms</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h3 className="footer-heading mb-4">Follow Us</h3>
                        <div>
                            <span className="pl-0 pr-3"><span className="icon-facebook" /></span>
                            <span className="pl-3 pr-3"><span className="icon-twitter" /></span>
                            <span className="pl-3 pr-3"><span className="icon-instagram" /></span>
                            <span className="pl-3 pr-3"><span className="icon-linkedin" /></span>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                        <p>
                            Copyright ©
                            All rights reserved | This template is made with
                            <i className="icon-heart text-danger" aria-hidden="true" /> by <span>Colorlib</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
