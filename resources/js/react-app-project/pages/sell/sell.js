import React from 'react';

const Sell = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <a className="navbar-brand ml-5" href="#">Sckedio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto mr-5">
                        <li className="nav-item ">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/sell">Sell <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Buy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Build</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className='container'>
                <h1 className='mt-4'>Sell</h1>
            </div>
        </div>
    );
};

export default Sell;