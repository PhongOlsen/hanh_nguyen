import React from "react";
import Search from "../../components/common/Search";
import Table from "../../components/common/Table";

const HomePage = () => {
    return (
        <div className='home_page'>
            <Search/>
            <Table/>
            <div className="site-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <div className="site-section-title">
                                <h2>Why Choose Us?</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe
                                architecto error
                                corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque,
                                deleniti cupiditate
                                officia.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <span className="service text-center">
                                <span className="icon flaticon-house"/>
                                <h2 className="service-heading">Research Subburbs</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio
                                    molestia.</p>
                                <p><span className="read-more">Read More</span></p>
                            </span>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <span className="service text-center">
                                <span className="icon flaticon-sold"/>
                                <h2 className="service-heading">Sold Houses</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio
                                    molestia.</p>
                                <p><span className="read-more">Read More</span></p>
                            </span>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <span className="service text-center">
                                <span className="icon flaticon-camera"/>
                                <h2 className="service-heading">Security Priority</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio
                                    molestia.</p>
                                <p><span className="read-more">Read More</span></p>
                            </span>
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
                                architecto error
                                corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque,
                                deleniti cupiditate
                                officia.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={100}>
                            <span><img src="assets/images/img_4.jpg" alt="" className="img-fluid"/></span>
                            <div className="p-4 bg-white">
                                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                                <h2 className="h5 text-black mb-3"><span>Art Gossip by Mike Charles</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa
                                    exercitationem veniam quae
                                    sunt.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <span><img src="assets/images/img_2.jpg" alt="" className="img-fluid"/></span>
                            <div className="p-4 bg-white">
                                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                                <h2 className="h5 text-black mb-3"><span>Art Gossip by Mike Charles</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa
                                    exercitationem veniam quae
                                    sunt.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={300}>
                            <span><img src="assets/images/img_3.jpg" alt="" className="img-fluid"/></span>
                            <div className="p-4 bg-white">
                                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                                <h2 className="h5 text-black mb-3"><span>Art Gossip by Mike Charles</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa
                                    exercitationem veniam quae
                                    sunt.</p>
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
                                    eum pariatur labore
                                    fugit amet eaque iure vitae, repellendus laborum in modi reiciendis quis! Optio
                                    minima quibusdam,
                                    laboriosam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="assets/images/person_1.jpg" alt="" className="img-fluid rounded mb-4"/>
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light text-black h4">Megan Smith</h2>
                                    <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non
                                        quis facere blanditiis
                                        praesentium est. Totam atque corporis nisi, veniam non. Tempore cupiditate,
                                        vitae minus obcaecati
                                        provident beatae!</p>
                                    <p>
                                        <span className="text-black p-2"><span className="icon-facebook"/></span>
                                        <span className="text-black p-2"><span className="icon-twitter"/></span>
                                        <span className="text-black p-2"><span className="icon-linkedin"/></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="assets/images/person_2.jpg" alt="" className="img-fluid rounded mb-4"/>
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light text-black h4">Brooke Cagle</h2>
                                    <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cumque vitae
                                        voluptates culpa earum
                                        similique corrupti itaque veniam doloribus amet perspiciatis recusandae sequi
                                        nihil tenetur ad, modi
                                        quos id magni!</p>
                                    <p>
                                        <span className="text-black p-2"><span className="icon-facebook"/></span>
                                        <span className="text-black p-2"><span className="icon-twitter"/></span>
                                        <span className="text-black p-2"><span className="icon-linkedin"/></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="assets/images/person_3.jpg" alt="" className="img-fluid rounded mb-4"/>
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light text-black h4">Philip Martin</h2>
                                    <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto,
                                        inventore, iure dolorum
                                        officiis modi repellat nobis, praesentium perspiciatis, explicabo. Atque
                                        cupiditate, voluptates pariatur
                                        odit officia libero veniam quo.</p>
                                    <p>
                                        <span className="text-black p-2"><span className="icon-facebook"/></span>
                                        <span className="text-black p-2"><span className="icon-twitter"/></span>
                                        <span className="text-black p-2"><span className="icon-linkedin"/></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;
