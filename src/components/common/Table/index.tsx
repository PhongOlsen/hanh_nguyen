import React from 'react';
import Property from "../Property";

const Table = () => {
    return (
        <div className="site-section site-section-sm bg-light">
            <div className="container">
                <div className="row mb-5">
                    <Property/>
                    <Property/>
                    <Property/>
                    <Property/>
                    <Property/>
                    <Property/>
                </div>
            </div>
        </div>
    );
}

export default Table;
