import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <>

            <footer class="custom-footer text-center text-white">

                <div class="container p-4">
                    {/* <!-- Section: Social media --> */}
                    <section class="mb-4">

                        <a
                            className="btn btn-outline-light btn-floating m-1 rounded-circle border border-danger"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-facebook-f " style={{ color: '#ff0000' }}></i>
                        </a>
                        <a
                            className="btn btn-outline-light btn-floating m-1 rounded-circle border border-danger"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-twitter " style={{ color: '#ff0000' }}></i>
                        </a>

                        {/* <!-- Google --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1 rounded-circle border border-danger"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-google " style={{ color: '#ff0000' }}></i>
                        </a>

                        {/* <!-- Instagram --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1 rounded-circle border border-danger"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-instagram " style={{ color: '#ff0000' }}></i>
                        </a>

                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1 rounded-circle border border-danger"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-linkedin-in " style={{ color: '#ff0000' }}></i>
                        </a>

                        {/* <!-- Github --> */}
                        <a
                            className="btn btn-outline-light btn-floating m-1 rounded-circle border border-danger"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-github " style={{ color: '#ff0000' }}></i>
                        </a>
                    </section>

                    <section class="">
                        <form action="">
                            <div class="row d-flex justify-content-center text-danger">
                                <div class="col-auto">
                                    <p class="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div class="col-md-5 col-12">
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="email" id="form5Example24" class="form-control" placeholder="Email address" />
                                    </div>
                                </div>

                                <div class="col-auto">
                                    <button data-mdb-ripple-init type="submit" class="btn btn-outline-light mb-4 ">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>



                    {/* <!-- Section: Text --> */}
                    <section class="mb-4">
                        <p>
                            Sparkstack is a dynamic news portal dedicated to delivering authentic and up-to-date news, with a special focus on the latest in technology.<br /> Stay informed with our comprehensive coverage of tech-related developments and insightful analysis.
                        </p>
                    </section>

                    <section class="down-link">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Latest News</h5>

                                <ul class="list-unstyled mb-1">
                                    <li>
                                        <a href="#!" class="text-white">Tech Innovations</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Gadget Reviews</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Industry Updates</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Events Coverage</a>
                                    </li>
                                </ul>
                            </div>



                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Technology Categories</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Latest Gadgets</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Software Updates</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Tech Events</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Industry Insights</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Useful Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="/latest-news" class="text-white">Latest News</a>
                                    </li>
                                    <li>
                                        <a href="/tech-innovations" class="text-white">Tech Innovations</a>
                                    </li>
                                    <li>
                                        <a href="/gadget-reviews" class="text-white">Gadget Reviews</a>
                                    </li>
                                    <li>
                                        <a href="/industry-updates" class="text-white">Industry Updates</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">About Us</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">About</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Career</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 Copyright:
                    <a class="text-white" href="#"> Sparkstack.com</a>
                </div>
            </footer>

        </>
    );
}
export default Footer;