import React from "react";
import './MobileCard.css';
import Header from "../Header/Header";

const MobileCard = () => {
    return (
        <>
        <Header/>
            <div class="container">

                <div class="row pt-5">
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img class="card-img-top " src="https://images.unsplash.com/photo-1681907624035-63bf2107301c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjF8MTA3NTg1Nnx8ZW58MHx8fHx8" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card 1</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-danger">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Repeat the above card structure for the next two cards in the same row --> */}

                    {/* <!-- Second Card --> */}
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img class="card-img-top" src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW58ZW58MHx8MHx8fDA%3D" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card 2</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-danger">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Third Card --> */}
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img class="card-img-top" src="https://plus.unsplash.com/premium_photo-1661371927364-e3aec9079c66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amFwYW58ZW58MHx8MHx8fDA%3D" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card 3</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-danger">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row pt-5">
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img class="card-img-top" src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGphcGFufGVufDB8fDB8fHww" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card 4</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-danger">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Repeat the above card structure for the next two cards in the same row --> */}

                    {/* <!-- Second Card --> */}
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img class="card-img-top" src="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphcGFufGVufDB8fDB8fHww" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card 5</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-danger">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Third Card --> */}
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img class="card-img-top" src="https://images.unsplash.com/photo-1547500135-9f6e5a9a6aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDc1ODU2fHxlbnwwfHx8fHw%3D" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card 6</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                                <a href="#" class="btn btn-danger">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MobileCard;