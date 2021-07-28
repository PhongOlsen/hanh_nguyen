import React from 'react';

function Search() {
    return (
        <div className="site-section site-section-sm pb-0">
            <div className="container">
                <div className="row">
                    <form className="form-search col-md-12" style={{ marginTop: '-100px' }}>
                        <div className="row  align-items-end">
                            <div className="col-md-3">
                                <label htmlFor="list-types">Listing Types</label>
                                <div className="select-wrap">
                                    <span className="icon icon-arrow_drop_down" />
                                    <select name="list-types" id="list-types" className="form-control d-block rounded-0">
                                        <option>Condo</option>
                                        <option>Commercial Building</option>
                                        <option>Land Property</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="offer-types">Offer Type</label>
                                <div className="select-wrap">
                                    <span className="icon icon-arrow_drop_down" />
                                    <select name="offer-types" id="offer-types" className="form-control d-block rounded-0">
                                        <option>For Sale</option>
                                        <option>For Rent</option>
                                        <option>For Lease</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="select-city">Select City</label>
                                <div className="select-wrap">
                                    <span className="icon icon-arrow_drop_down" />
                                    <select name="select-city" id="select-city" className="form-control d-block rounded-0">
                                        <option>New York</option>
                                        <option>Brooklyn</option>
                                        <option>London</option>
                                        <option>Japan</option>
                                        <option>Philippines</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <input type="submit" className="btn btn-success text-white btn-block rounded-0" defaultValue="Search" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="view-options bg-white py-3 px-3 d-md-flex align-items-center">
                            <div className="ml-auto d-flex align-items-center">
                                <div>
                                    <span className="view-list px-3 border-right active">All</span>
                                    <span className="view-list px-3 border-right">Rent</span>
                                    <span className="view-list px-3">Sale</span>
                                </div>
                                <div className="select-wrap">
                                    <span className="icon icon-arrow_drop_down" />
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
    );
}

export default Search;
