import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <section className="footer-contain">
            <footer className="text-center text-white" style={{backgroundImage: "linear-gradient(to right, #d7d2cc 0%, #304352 100%)"}}>
                <div className="section ">
                    {/* <!-- Section: CTA --> */}
                    <section className="">
                        <p className="d-flex justify-content-center align-items-center">
                            <span className="me-3">Register for free</span>
                            <button data-mdb-ripple-init type="button" className="btn btn-outline-light btn-danger btn-rounded">
                                Sign up!
                            </button>
                        </p>
                    </section>

                </div>

                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>

        </section>
    );
}
export default Footer;