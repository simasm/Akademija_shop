import React, { Component } from "react";
import { Link } from "react-router-dom";

const Footer =  (props) => {


    return (
        <React.Fragment>
            <footer className="text-center text-lg-start bg-light">
                <section className="d-flex justify-content-center">
                    <div className="me-5 d-none d-lg-block">
                        footer
                    </div>
                </section>
                <div className="text-center p-4" style={{backgroundcolor : "grey"}}>
                    © 2021
                </div>



            </footer>

 

        </React.Fragment >

    )
}

export default Footer;